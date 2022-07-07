import openpyxl
import csv

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
for i in indicatorsCES:
    cell_name = "{}1".format(i)
    sums[i][0] = worksheet[cell_name].value

for row in range(2,worksheet.max_row+1):
    # increment tracts
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

# print(sums)
# print(tract_counter)

# update "sums" to have average values instead of sums
for row in range(0,len(sums)):
    for col in range(len(sums[0])):
        if tract_counter[row][col] != 0:
            sums[row][col] = sums[row][col]/tract_counter[row][col] 
