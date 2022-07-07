from xml.dom.pulldom import default_bufsize
import requests
import json
import csv
import openpyxl
from datetime import date

############################################################### 
# 
# the selected indicators from HPI
# 
indicators = [220, 228, 236, 226, 227, 239, 235, 223, 229, 237]
# 
# counties to retreive are in counties.csv, first column being 
# the name of the county and second column the ID from the HPI 
# website
# 
# the selected indicators from CalEnviroScreen
# Poverty, Unemployment, Education, PM 2.5, Ozone, Drinking water, Groundwater threats, Hazardous waste, Toxic release, Diesel PM
# 
indicatorsCES = ['AY', 'BA', 'AU', 'N', 'K', 'R', 'AD', 'AF', 'X', 'P']
#
###############################################################

# returns a 2 dimensional array of all the county names and their respective county ID's
def getCounties():
    counties = []
    with open('/Users/Joshua/Desktop/trackingCA/Tracking California/counties.csv', 'r') as file:
        reader = csv.reader(file)
        for county in reader:
            counties.append(county)
    return counties

# create CSV file
def writeResult(dataArr):
    with open('/Users/Joshua/Desktop/trackingCA/Tracking California/data.csv', 'w', encoding='UTF8', newline='') as f:
        writer = csv.writer(f)
        for row in dataArr:
            writer.writerow(row)
    print("data.csv updated successfully")


####################### HPI #######################
counties = getCounties()
# final array that contains indicator values for all counties
dataArr = [["" for i in range(len(counties)+1)] for j in range(len(indicators)*2+1+len(indicatorsCES))]
countyIndex = 1
for i in range(0, len(counties)):
    # get indicator value and percentile for each county and add it to dataArr
    countyID = counties[i][1].strip()
    dataArr[0][countyIndex] = counties[i][0]
    print("Getting county ID " + countyID + "...")
    response = requests.post('https://map.healthyplacesindex.org/api/v1/conditions/', json= {"geography":6,"geoid":countyID,"attributes":["percentile","value"],"indicator":indicators,"year":date.today().year})
    rowIndex = 1
    for e in response.json()['response']:
        for a in e['indicators']:
            dataArr[rowIndex][0] = a['title'] + " value"
            dataArr[rowIndex][countyIndex] = a['value']
            rowIndex += 1
            dataArr[rowIndex][0] = a['title'] + " rank"
            dataArr[rowIndex][countyIndex] = float(a['percentile'])*100
            rowIndex += 1
    countyIndex += 1



####################### CalEnviroScreen #######################

#read excel file
wb = openpyxl.load_workbook("/Users/Joshua/Desktop/trackingCA/Tracking California/calenviroscreen40resultsdatadictionary_F_2021.xlsx")
first_sheet = wb.get_sheet_names()[0]
worksheet = wb.get_sheet_by_name(first_sheet)
ws = wb.active

# construct county lookup dictionary
countiesCES = {}
countyID = 0
with open('/Users/Joshua/Desktop/trackingCA/Tracking California/counties.csv', 'r') as file:
    reader = csv.reader(file)
    for county in reader:
        countiesCES[county[0].strip()] = countyID
        countyID += 1

# create 2D list for the counties, number of tracts, sum of indicator values to be able to get the average for each indicator
sums = [[0 for i in range(59)] for j in range(len(indicatorsCES))]
tract_counter = [[0 for i in range(59)] for j in range(len(indicatorsCES))]
printArr = [["empty" for i in range(59)] for j in range(len(indicatorsCES))]

# add indicators to list that will be printed
indicatorsCES_counter = 0
for i in indicatorsCES:
    cell_name = "{}1".format(i)
    dataArr[indicatorsCES_counter + len(indicators)*2+1][0] = worksheet[cell_name].value
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
            dataArr[row + len(indicators)*2+1][col] = sums[row][col]/tract_counter[row][col]
    print(dataArr[row + len(indicators)*2+1][0],"average values calculated...")

writeResult(dataArr)


