import openpyxl
wb = openpyxl.load_workbook("calenviroscreen40resultsdatadictionary_F_2021.xlsx")
first_sheet = wb.get_sheet_names()[0]
worksheet = wb.get_sheet_by_name(first_sheet)
ws = wb.active

counties = []
with open('counties.csv', 'r') as file:
    reader = csv.reader(file)
    for county in reader:
        counties.append(county)

# indicators = ['N', 'O', 'P', 'AB']
# for row in range(2,worksheet.max_row+1):
#     county_name = worksheet["{}{}".format('C', row)].value
#     print(county_name)

#     for column in indicators:
#         cell_name = "{}{}".format(column, row)
#         print(worksheet[cell_name].value)