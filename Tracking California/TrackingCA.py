from xml.dom.pulldom import default_bufsize
import requests
import json
import csv
import openpyxl
from datetime import date
import os.path
import sys
import statistics

############################################################### 
# 
# counties to retreive are in counties.csv, first column being 
# the name of the county and second column the ID from the HPI website 
# 
# the indicators to retrieve from HPI
indicators = [220, 228, 236, 226, 227, 239, 235, 223, 229, 237]
# 
# downloaded the excel file from https://calenviroscreen-oehha.hub.arcgis.com/#Data 
# the selected indicators (column index) from CalEnviroScreen spreadsheet above
# percentiles: indicatorsCES = ['AY', 'BA', 'AU', 'N', 'R', 'AD', 'AF', 'X', 'P']
indicatorsCES = ['AX', 'AZ', 'AT', 'M', 'Q', 'Ac', 'AE', 'W', 'O']
# (Poverty, Unemployment, Education, PM 2.5, Ozone (L), Drinking water, Groundwater threats, Hazardous waste, Toxic release, Diesel PM)
# 
###############################################################



# returns a 2 dimensional array of all the county names and their respective county ID's
def getCounties():
    counties = []
    with open('counties.csv', 'r') as file:
        reader = csv.reader(file)
        for county in reader:
            counties.append(county)
    return counties

# construct county name index map
def getCountyMap():
    countiesCES = {}
    countyID = 0
    with open('counties.csv', 'r') as file:
        reader = csv.reader(file)
        for county in reader:
            countiesCES[county[0].strip()] = countyID
            countyID += 1
    return countiesCES

# create output CSV file
def writeResult(dataArr):
    with open('indicator-data.csv', 'w', encoding='UTF8', newline='') as f:
        writer = csv.writer(f)
        for row in dataArr:
            writer.writerow(row)
    print("indicator-data.csv updated successfully\n")

# see if excel file is in the same folder
def getCalEnviroScreenExcelFile():
    excel_files = []
    files = os.listdir('.')
    for f in files:
        if (f.endswith('.xlsx')):
            excel_files.append(f)
        
    if len(excel_files) == 0:
        sys.exit("\n[!] Error: No excel file exists\n")
    elif len(excel_files) == 1:
        return excel_files[0]
    else:
        sys.exit("\n[!] Error: More than one excel file\n" + ', '.join(excel_files))

####################### HPI ########################
counties = getCounties()
print("Retrieving HPI county data...")
# final array that contains indicator values for all counties
dataArr = [["" for i in range(len(counties)+1)] for j in range(len(indicators)+1+len(indicatorsCES))]
countyIndex = 1
for i in range(0, len(counties)):
    # get indicator value and percentile for each county and add it to dataArr
    countyID = counties[i][1].strip()
    dataArr[0][countyIndex] = counties[i][0]
    print("  Getting data for " + counties[i][0].strip() + "...")
    response = requests.post('https://map.healthyplacesindex.org/api/v1/conditions/', json= {"geography":6,"geoid":countyID,"attributes":["percentile","value"],"indicator":indicators,"year":date.today().year})
    rowIndex = 1
    for e in response.json()['response']:
        for a in e['indicators']:
            dataArr[rowIndex][0] = a['title']
            dataArr[rowIndex][countyIndex] = a['value'] if a['value'] is not None else ""
            rowIndex += 1
    countyIndex += 1



####################### CalEnviroScreen #######################

print("\nCalculating CalEnviroScreen county data...")
#read excel file
wb = openpyxl.load_workbook(getCalEnviroScreenExcelFile())
worksheet = wb.worksheets[0]
ws = wb.active

# construct county lookup dictionary
countiesCES = getCountyMap()

# create 2D list for the counties, number of tracts, sum of indicator values to be able to get the average for each indicator
sums = [[0 for i in range(59)] for j in range(len(indicatorsCES))]
tract_counter = [[0 for i in range(59)] for j in range(len(indicatorsCES))]
printArr = [["empty" for i in range(59)] for j in range(len(indicatorsCES))]

# add indicators to list that will be printed
indicatorsCES_counter = 0
for i in indicatorsCES:
    cell_name = "{}1".format(i)
    dataArr[indicatorsCES_counter + len(indicators)+1][0] = worksheet[cell_name].value
    indicatorsCES_counter += 1

for row in range(2,worksheet.max_row+1):
    # increment tracts to find average
    county_name = worksheet["{}{}".format('C', row)].value.strip()
    indicator_index = 0
    for column in indicatorsCES:
        indicator_name = indicatorsCES[indicator_index]
        cell_name = "{}{}".format(column, row)
        worksheet_value = worksheet[cell_name].value
        indicator_value = 0
        indicator_value = float(worksheet_value) if worksheet_value != "NA" else 0

        if worksheet_value != "NA": 
            # assign tract count of each indicator to accurately calculate the average value
            tract_counter[indicator_index][countiesCES[county_name] + 1] += 1

        # put sum of values in 2D list
        sums[indicator_index][countiesCES[county_name] + 1] += indicator_value
        indicator_index += 1

# update "printArr" to have average values
for row in range(0,len(sums)):
    for col in range(len(sums[0])):
        if tract_counter[row][col] != 0:
            dataArr[row + len(indicators)+1][col] = sums[row][col]/tract_counter[row][col]
    print("  ",dataArr[row + len(indicators)+1][0],"average values calculated.")

writeResult(dataArr)

# write json javascript
json_data = {}
json_indicator_data = []
json_indicator_medians = []
for col in range(1,len(dataArr[0])):
    counties_json_data = {}
    for row in range(1,len(dataArr)):
        counties_json_data[dataArr[row][0]] = dataArr[row][col]
    json_data[dataArr[0][col]] = counties_json_data

# indicatorValues = []
json_maxDiff = []
for row in range(1, len(dataArr)):
    row_array = []
    json_indicator_data.append(dataArr[row][0])
   #  indicatorValues = []
    for col in range(1,len(dataArr[0])):
        if (row != 0 and dataArr[row][col] != ''):
            row_array.append(dataArr[row][col])
    json_indicator_medians.append(statistics.median(row_array))
    max = 0 
    for col in range(1,len(dataArr[0])):
        if(dataArr[row][col] != '' and abs(float(dataArr[row][col]) - json_indicator_medians[-1]) > max):
            max = abs(float(dataArr[row][col]) - json_indicator_medians[-1])
        # indicatorValues.append(abs(dataArr[row][col] - json_indicator_medians[row]))
    json_maxDiff.append(max)

with open('indicator-data.js', 'w') as f:
    f.write("const DATA = " + json.dumps(json_data) + ";\n")
    f.write("const indicators = " + json.dumps(json_indicator_data) + ";\n")
    f.write("const maxValues = " + json.dumps(json_maxDiff) + ";\n")
    f.write("const medians = " + json.dumps(json_indicator_medians) + ";")



