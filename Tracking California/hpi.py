from xml.dom.pulldom import default_bufsize
import requests
import json
import csv
from datetime import date

############################################################### 
# 
# the selected indicators
# 
indicators = [220, 228, 236, 226, 227, 239, 235, 223, 229, 237]
# 
# counties to retreive are in counties.csv, first column being 
# the name of the county and second column the ID from the HPI 
# website
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

def writeResult(dataArr):
    # create CSV file
    with open('HPI.csv', 'w', encoding='UTF8', newline='') as f:
        writer = csv.writer(f)
        for row in dataArr:
            writer.writerow(row)
    print("HPI.csv updated successfully")

counties = getCounties()
# final array that contains indicator values for all counties
dataArr = [["" for i in range(len(counties)+1)] for j in range(len(indicators)*2+1)]
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
            dataArr[rowIndex][countyIndex] = a['percentile']
            rowIndex += 1
    countyIndex += 1

writeResult(dataArr)




