const DATA = [{"Above Poverty Pctl": {"Alameda": 77.5862068965517, "Alpine": 15.5172413793103, "Amador": 75.86206896551721, "Butte": 20.6896551724138, "Calaveras": 68.9655172413793, "Colusa ": 58.6206896551724, "Contra Costa": 87.93103448275859, "Del Norte": 17.2413793103448, "El Dorado": 91.3793103448276, "Fresno": 5.17241379310345, "Glenn": 32.758620689655196, "Humboldt": 12.0689655172414, "Imperial": 1.72413793103448, "Inyo": 82.7586206896552, "Kern": 10.3448275862069, "Kings": 29.3103448275862, "Lake": 27.5862068965517, "Lassen": 53.448275862068996, "Los Angeles": 44.827586206896605, "Madera": 13.7931034482759, "Marin": 98.27586206896551, "Mariposa": 41.3793103448276, "Mendocino ": 31.0344827586207, "Merced": 8.620689655172411, "Modoc": 25.8620689655172, "Mono": 65.51724137931029, "Monterey": 56.8965517241379, "Napa": 93.10344827586209, "Nevada": 70.68965517241381, "Orange": 72.4137931034483, "Placer": 94.8275862068966, "Plumas ": 63.7931034482759, "Riverside": 50.0, "Sacramento ": 46.551724137931, "San Benito": 89.65517241379311, "San Bernardino": 36.2068965517241, "San Diego": 67.2413793103448, "San Francisco": 74.13793103448279, "San Joaquin": 48.2758620689655, "San Luis Obispo": 62.0689655172414, "San Mateo": 100, "Santa Barbara": 51.7241379310345, "Santa Clara": 96.551724137931, "Santa Cruz": 55.1724137931034, "Shasta ": 34.4827586206897, "Sierra": 79.31034482758619, "Siskiyou": 24.1379310344828, "Solano": 81.0344827586207, "Sonoma": 84.48275862068971, "Stanislaus": 43.1034482758621, "Sutter": 39.655172413793096, "Tehama": 6.89655172413793, "Trinity": 22.413793103448302, "Tulare": 3.44827586206897, "Tuolumne": 60.3448275862069, "Ventura": 86.2068965517241, "Yolo": 18.965517241379303, "Yuba": 37.931034482758605}, "Employed Pctl": {"Alameda": 87.93103448275859, "Alpine": 12.0689655172414, "Amador": 5.17241379310345, "Butte": 39.655172413793096, "Calaveras": 18.965517241379303, "Colusa ": 65.51724137931029, "Contra Costa": 79.31034482758619, "Del Norte": 3.44827586206897, "El Dorado": 63.7931034482759, "Fresno": 48.2758620689655, "Glenn": 25.8620689655172, "Humboldt": 60.3448275862069, "Imperial": 10.3448275862069, "Inyo": 81.0344827586207, "Kern": 24.1379310344828, "Kings": 13.7931034482759, "Lake": 20.6896551724138, "Lassen": 1.72413793103448, "Los Angeles": 70.68965517241381, "Madera": 17.2413793103448, "Marin": 86.2068965517241, "Mariposa": 41.3793103448276, "Mendocino ": 58.6206896551724, "Merced": 32.758620689655196, "Modoc": 6.89655172413793, "Mono": 100, "Monterey": 50.0, "Napa": 94.8275862068966, "Nevada": 62.0689655172414, "Orange": 77.5862068965517, "Placer": 75.86206896551721, "Plumas ": 27.5862068965517, "Riverside": 53.448275862068996, "Sacramento ": 67.2413793103448, "San Benito": 89.65517241379311, "San Bernardino": 43.1034482758621, "San Diego": 82.7586206896552, "San Francisco": 98.27586206896551, "San Joaquin": 46.551724137931, "San Luis Obispo": 55.1724137931034, "San Mateo": 96.551724137931, "Santa Barbara": 74.13793103448279, "Santa Clara": 91.3793103448276, "Santa Cruz": 68.9655172413793, "Shasta ": 34.4827586206897, "Sierra": 51.7241379310345, "Siskiyou": 22.413793103448302, "Solano": 72.4137931034483, "Sonoma": 93.10344827586209, "Stanislaus": 56.8965517241379, "Sutter": 44.827586206896605, "Tehama": 29.3103448275862, "Trinity": 8.620689655172411, "Tulare": 31.0344827586207, "Tuolumne": 15.5172413793103, "Ventura": 84.48275862068971, "Yolo": 36.2068965517241, "Yuba": 37.931034482758605}, "Per Capita Income Pctl": {"Alameda": 91.3793103, "Alpine": 72.4137931, "Amador": 50.0, "Butte": 44.8275862, "Calaveras": 56.896551699999996, "Colusa ": 29.3103448, "Contra Costa": 93.1034483, "Del Norte": 17.241379300000002, "El Dorado": 86.20689660000001, "Fresno": 20.6896552, "Glenn": 8.6206897, "Humboldt": 41.3793103, "Imperial": 1.7241379000000001, "Inyo": 51.7241379, "Kern": 15.517241400000001, "Kings": 6.896551700000001, "Lake": 31.034482800000003, "Lassen": 5.1724138, "Los Angeles": 60.344827599999995, "Madera": 12.068965500000001, "Marin": 100, "Mariposa": 39.6551724, "Mendocino ": 43.103448300000004, "Merced": 13.793103400000001, "Modoc": 10.3448276, "Mono": 63.79310339999999, "Monterey": 48.2758621, "Napa": 89.6551724, "Nevada": 79.3103448, "Orange": 82.7586207, "Placer": 87.93103450000001, "Plumas ": 67.2413793, "Riverside": 36.2068966, "Sacramento ": 53.4482759, "San Benito": 55.1724138, "San Bernardino": 22.4137931, "San Diego": 75.862069, "San Francisco": 98.2758621, "San Joaquin": 34.482758600000004, "San Luis Obispo": 74.137931, "San Mateo": 96.5517241, "Santa Barbara": 70.6896552, "Santa Clara": 94.8275862, "Santa Cruz": 81.03448279999999, "Shasta ": 46.5517241, "Sierra": 58.62068969999999, "Siskiyou": 37.9310345, "Solano": 68.96551720000001, "Sonoma": 84.4827586, "Stanislaus": 25.862068999999998, "Sutter": 32.7586207, "Tehama": 18.9655172, "Trinity": 27.5862069, "Tulare": 3.4482759, "Tuolumne": 65.5172414, "Ventura": 77.5862069, "Yolo": 62.0689655, "Yuba": 24.137931000000002}, "Bachelor's Education or Higher Pctl": {"Alameda": 93.10344827586209, "Alpine": 74.13793103448279, "Amador": 34.4827586206897, "Butte": 60.3448275862069, "Calaveras": 31.0344827586207, "Colusa ": 13.7931034482759, "Contra Costa": 91.3793103448276, "Del Norte": 12.0689655172414, "El Dorado": 72.4137931034483, "Fresno": 43.1034482758621, "Glenn": 5.17241379310345, "Humboldt": 63.7931034482759, "Imperial": 17.2413793103448, "Inyo": 58.6206896551724, "Kern": 22.413793103448302, "Kings": 10.3448275862069, "Lake": 18.965517241379303, "Lassen": 1.72413793103448, "Los Angeles": 67.2413793103448, "Madera": 6.89655172413793, "Marin": 100, "Mariposa": 53.448275862068996, "Mendocino ": 51.7241379310345, "Merced": 3.44827586206897, "Modoc": 15.5172413793103, "Mono": 62.0689655172414, "Monterey": 55.1724137931034, "Napa": 79.31034482758619, "Nevada": 81.0344827586207, "Orange": 86.2068965517241, "Placer": 84.48275862068971, "Plumas ": 50.0, "Riverside": 46.551724137931, "Sacramento ": 65.51724137931029, "San Benito": 37.931034482758605, "San Bernardino": 41.3793103448276, "San Diego": 82.7586206896552, "San Francisco": 98.27586206896551, "San Joaquin": 32.758620689655196, "San Luis Obispo": 75.86206896551721, "San Mateo": 94.8275862068966, "Santa Barbara": 70.68965517241381, "Santa Clara": 96.551724137931, "Santa Cruz": 87.93103448275859, "Shasta ": 44.827586206896605, "Sierra": 27.5862068965517, "Siskiyou": 48.2758620689655, "Solano": 56.8965517241379, "Sonoma": 77.5862068965517, "Stanislaus": 25.8620689655172, "Sutter": 29.3103448275862, "Tehama": 20.6896551724138, "Trinity": 36.2068965517241, "Tulare": 8.620689655172411, "Tuolumne": 39.655172413793096, "Ventura": 68.9655172413793, "Yolo": 89.65517241379311, "Yuba": 24.1379310344828}, "High School Enrollment Pctl": {"Alameda": 70.4633204633205, "Alpine": 42.6640926640927, "Amador": 66.023166023166, "Butte": 65.8301158301158, "Calaveras": 70.6563706563707, "Colusa ": 45.7528957528958, "Contra Costa": 52.123552123552095, "Del Norte": 53.088803088803104, "El Dorado": 55.5984555984556, "Fresno": 44.5945945945946, "Glenn": 43.8223938223938, "Humboldt": 75.2895752895753, "Imperial": 29.922779922779903, "Inyo": 70.8494208494209, "Kern": 36.2934362934363, "Kings": 23.7451737451737, "Lake": 57.3359073359073, "Lassen": 61.003861003861005, "Los Angeles": 57.9150579150579, "Madera": 31.467181467181497, "Marin": 60.617760617760595, "Mariposa": 85.1351351351351, "Mendocino ": 63.1274131274131, "Merced": 36.1003861003861, "Modoc": 63.513513513513495, "Mono": 68.3397683397683, "Monterey": 45.5598455598456, "Napa": 57.722007722007696, "Nevada": 71.6216216216216, "Orange": 55.7915057915058, "Placer": 56.7567567567568, "Plumas ": 83.7837837837838, "Riverside": 44.980694980695, "Sacramento ": 56.1776061776062, "San Benito": 40.1544401544402, "San Bernardino": 41.8918918918919, "San Diego": 62.355212355212394, "San Francisco": 88.6100386100386, "San Joaquin": 42.8571428571429, "San Luis Obispo": 78.18532818532819, "San Mateo": 67.7606177606178, "Santa Barbara": 61.196911196911195, "Santa Clara": 61.583011583011604, "Santa Cruz": 68.1467181467181, "Shasta ": 64.0926640926641, "Sierra": 85.3281853281853, "Siskiyou": 68.5328185328185, "Solano": 58.108108108108105, "Sonoma": 64.8648648648649, "Stanislaus": 43.629343629343595, "Sutter": 45.9459459459459, "Tehama": 48.2625482625483, "Trinity": 77.6061776061776, "Tulare": 30.501930501930502, "Tuolumne": 75.0965250965251, "Ventura": 50.5791505791506, "Yolo": 60.038610038609995, "Yuba": 59.266409266409305}, "Preschool Enrollment Pctl": {"Alameda": 30.308880308880298, "Alpine": 53.4749034749035, "Amador": 76.0617760617761, "Butte": 37.065637065637105, "Calaveras": 71.042471042471, "Colusa ": 35.3281853281853, "Contra Costa": 31.8532818532819, "Del Norte": 47.4903474903475, "El Dorado": 44.5945945945946, "Fresno": 33.976833976834, "Glenn": 68.1467181467181, "Humboldt": 38.996138996139, "Imperial": 19.6911196911197, "Inyo": 49.6138996138996, "Kern": 49.034749034749, "Kings": 52.702702702702695, "Lake": 62.934362934362895, "Lassen": 70.4633204633205, "Los Angeles": 33.011583011583, "Madera": 52.123552123552095, "Marin": 38.2239382239382, "Mariposa": 77.4131274131274, "Mendocino ": 45.7528957528958, "Merced": 25.8687258687259, "Modoc": 55.7915057915058, "Mono": 79.9227799227799, "Monterey": 50.193050193050205, "Napa": 55.2123552123552, "Nevada": 55.5984555984556, "Orange": 29.922779922779903, "Placer": 31.2741312741313, "Plumas ": 41.1196911196911, "Riverside": 53.281853281853294, "Sacramento ": 40.1544401544402, "San Benito": 51.544401544401495, "San Bernardino": 39.5752895752896, "San Diego": 34.362934362934396, "San Francisco": 41.6988416988417, "San Joaquin": 33.2046332046332, "San Luis Obispo": 54.0540540540541, "San Mateo": 26.4478764478765, "Santa Barbara": 37.6447876447876, "Santa Clara": 25.096525096525102, "Santa Cruz": 54.826254826254804, "Shasta ": 53.667953667953704, "Sierra": 80.11583011583011, "Siskiyou": 70.2702702702703, "Solano": 45.1737451737452, "Sonoma": 49.4208494208494, "Stanislaus": 39.1891891891892, "Sutter": 39.7683397683398, "Tehama": 42.0849420849421, "Trinity": 77.6061776061776, "Tulare": 46.9111969111969, "Tuolumne": 48.6486486486487, "Ventura": 28.571428571428598, "Yolo": 39.96138996139, "Yuba": 20.4633204633205}, "PM 2.5 Pctl": {"Alameda": 30.357142857142854, "Alpine": "", "Amador": 55.35714285714286, "Butte": 51.78571428571429, "Calaveras": 35.714285714285715, "Colusa ": 64.28571428571429, "Contra Costa": 33.92857142857143, "Del Norte": 83.92857142857143, "El Dorado": 71.42857142857143, "Fresno": 5.357142857142857, "Glenn": 60.71428571428571, "Humboldt": 82.14285714285714, "Imperial": 23.214285714285715, "Inyo": 92.85714285714286, "Kern": 0, "Kings": 1.7857142857142856, "Lake": 96.42857142857143, "Lassen": 89.28571428571429, "Los Angeles": 10.714285714285714, "Madera": 7.142857142857142, "Marin": 48.214285714285715, "Mariposa": 41.07142857142857, "Mendocino ": 75.0, "Merced": 8.928571428571429, "Modoc": 91.07142857142857, "Mono": 100, "Monterey": 85.71428571428571, "Napa": 25.0, "Nevada": 76.78571428571429, "Orange": 12.5, "Placer": 58.92857142857143, "Plumas ": 57.14285714285714, "Riverside": 19.642857142857142, "Sacramento ": 32.142857142857146, "San Benito": 87.5, "San Bernardino": 16.071428571428573, "San Diego": 21.428571428571427, "San Francisco": 39.285714285714285, "San Joaquin": 17.857142857142858, "San Luis Obispo": 67.85714285714286, "San Mateo": 46.42857142857143, "Santa Barbara": 62.5, "Santa Clara": 53.57142857142857, "Santa Cruz": 80.35714285714286, "Shasta ": 44.642857142857146, "Sierra": 78.57142857142857, "Siskiyou": 98.21428571428571, "Solano": 42.857142857142854, "Sonoma": 69.64285714285714, "Stanislaus": 14.285714285714285, "Sutter": 26.785714285714285, "Tehama": 73.21428571428571, "Trinity": 94.64285714285714, "Tulare": 3.571428571428571, "Tuolumne": 66.07142857142857, "Ventura": 28.57142857142857, "Yolo": 37.5, "Yuba": 50.0}, "Ozone Pctl": {"Alameda": 10.875786489663254, "Alpine": 62.5264467952707, "Amador": 66.97780543455715, "Butte": 61.68502995473238, "Calaveras": 71.71748599875544, "Colusa ": 39.01680149346608, "Contra Costa": 19.278278305360903, "Del Norte": 2.634900880078225, "El Dorado": 71.53435860965422, "Fresno": 83.22252206896346, "Glenn": 42.478738850860815, "Humboldt": 2.4177556523542827, "Imperial": 51.65224722484294, "Inyo": 38.774113254511505, "Kern": 90.20543400767343, "Kings": 80.55359653368367, "Lake": 17.293507571043353, "Lassen": 55.55832123349238, "Los Angeles": 59.7509030726379, "Madera": 76.51957468683204, "Marin": 7.84205464728179, "Mariposa": 75.42418585355735, "Mendocino ": 14.644679527069098, "Merced": 72.60023113165617, "Modoc": 50.21157436216555, "Mono": 43.8954573739888, "Monterey": 13.961499086657193, "Napa": 17.72464219041692, "Nevada": 74.36589919103919, "Orange": 52.667881283987434, "Placer": 67.39073102794326, "Plumas ": 68.07716241443684, "Riverside": 88.1446376297956, "Sacramento ": 52.767839440617685, "San Benito": 23.25281439158229, "San Bernardino": 92.11289362426923, "San Diego": 42.19839636994838, "San Francisco": 5.213281636430364, "San Joaquin": 50.3037520201636, "San Luis Obispo": 22.356670697772717, "San Mateo": 9.27605737636695, "Santa Barbara": 16.89280745054992, "Santa Clara": 21.495807990578783, "Santa Cruz": 15.2118136996793, "Shasta ": 48.02478738850861, "Sierra": 69.607965152458, "Siskiyou": 35.01733487421101, "Solano": 23.24349201410496, "Sonoma": 10.272482133091984, "Stanislaus": 70.06752373260602, "Sutter": 50.91178475123715, "Tehama": 57.948746959325675, "Trinity": 32.836341008089576, "Tulare": 88.33325355416216, "Tuolumne": 74.01934717429427, "Ventura": 44.92160382143155, "Yolo": 46.22429310789687, "Yuba": 50.809849764423504}, "Drinking Water Contaminants Pctl": {"Alameda": 100, "Alpine": "", "Amador": 25.0, "Butte": 75.0, "Calaveras": 50.0, "Colusa ": 80.35714285714286, "Contra Costa": 92.85714285714286, "Del Norte": 57.14285714285714, "El Dorado": 83.92857142857143, "Fresno": 1.7857142857142856, "Glenn": 51.78571428571429, "Humboldt": 94.64285714285714, "Imperial": 41.07142857142857, "Inyo": 44.642857142857146, "Kern": 7.142857142857142, "Kings": 33.92857142857143, "Lake": 46.42857142857143, "Lassen": 76.78571428571429, "Los Angeles": 14.285714285714285, "Madera": 10.714285714285714, "Marin": 98.21428571428571, "Mariposa": 37.5, "Mendocino ": 87.5, "Merced": 5.357142857142857, "Modoc": 66.07142857142857, "Mono": 32.142857142857146, "Monterey": 30.357142857142854, "Napa": 39.285714285714285, "Nevada": 53.57142857142857, "Orange": 42.857142857142854, "Placer": 96.42857142857143, "Plumas ": 67.85714285714286, "Riverside": 35.714285714285715, "Sacramento ": 48.214285714285715, "San Benito": 28.57142857142857, "San Bernardino": 12.5, "San Diego": 69.64285714285714, "San Francisco": 89.28571428571429, "San Joaquin": 8.928571428571429, "San Luis Obispo": 21.428571428571427, "San Mateo": 62.5, "Santa Barbara": 64.28571428571429, "Santa Clara": 71.42857142857143, "Santa Cruz": 60.71428571428571, "Shasta ": 85.71428571428571, "Sierra": 19.642857142857142, "Siskiyou": 82.14285714285714, "Solano": 78.57142857142857, "Sonoma": 73.21428571428571, "Stanislaus": 0, "Sutter": 17.857142857142858, "Tehama": 55.35714285714286, "Trinity": 91.07142857142857, "Tulare": 3.571428571428571, "Tuolumne": 16.071428571428573, "Ventura": 23.214285714285715, "Yolo": 58.92857142857143, "Yuba": 26.785714285714285}, "Park Access Pctl": {"Alameda": 91.07142857142857, "Alpine": "", "Amador": 5.357142857142857, "Butte": 39.285714285714285, "Calaveras": 10.714285714285714, "Colusa ": 53.57142857142857, "Contra Costa": 71.42857142857143, "Del Norte": 19.642857142857142, "El Dorado": 46.42857142857143, "Fresno": 32.142857142857146, "Glenn": 3.571428571428571, "Humboldt": 35.714285714285715, "Imperial": 62.5, "Inyo": 100, "Kern": 42.857142857142854, "Kings": 25.0, "Lake": 8.928571428571429, "Lassen": 41.07142857142857, "Los Angeles": 55.35714285714286, "Madera": 12.5, "Marin": 94.64285714285714, "Mariposa": 1.7857142857142856, "Mendocino ": 16.071428571428573, "Merced": 48.214285714285715, "Modoc": 7.142857142857142, "Mono": 96.42857142857143, "Monterey": 64.28571428571429, "Napa": 57.14285714285714, "Nevada": 17.857142857142858, "Orange": 82.14285714285714, "Placer": 60.71428571428571, "Plumas ": 44.642857142857146, "Riverside": 28.57142857142857, "Sacramento ": 87.5, "San Benito": 21.428571428571427, "San Bernardino": 33.92857142857143, "San Diego": 69.64285714285714, "San Francisco": 98.21428571428571, "San Joaquin": 67.85714285714286, "San Luis Obispo": 37.5, "San Mateo": 85.71428571428571, "Santa Barbara": 73.21428571428571, "Santa Clara": 78.57142857142857, "Santa Cruz": 66.07142857142857, "Shasta ": 14.285714285714285, "Sierra": 83.92857142857143, "Siskiyou": 23.214285714285715, "Solano": 80.35714285714286, "Sonoma": 58.92857142857143, "Stanislaus": 75.0, "Sutter": 50.0, "Tehama": 0, "Trinity": 92.85714285714286, "Tulare": 30.357142857142854, "Tuolumne": 26.785714285714285, "Ventura": 76.78571428571429, "Yolo": 89.28571428571429, "Yuba": 51.78571428571429}, "Poverty Pctl": {"Alameda": 34.59090143454704, "Alpine": 67.4497487437186, "Amador": 43.5245672808487, "Butte": 64.64700955759191, "Calaveras": 48.8241206030151, "Colusa ": 63.82160804020102, "Contra Costa": 32.06424635253562, "Del Norte": 77.2505384063173, "El Dorado": 33.80533620483368, "Fresno": 68.827597583879, "Glenn": 68.74581239530988, "Humboldt": 69.16959798994975, "Imperial": 74.51800670016752, "Inyo": 46.69597989949748, "Kern": 71.505401155437, "Kings": 68.74723618090451, "Lake": 71.322445561139, "Lassen": 58.781407035175874, "Los Angeles": 56.256515767558135, "Madera": 67.97684072536596, "Marin": 24.056160431788566, "Mariposa": 63.34798994974875, "Mendocino ": 68.06783919597989, "Merced": 75.5332786380884, "Modoc": 75.37374371859298, "Mono": 49.66917922948073, "Monterey": 54.06728084868789, "Napa": 35.84202261306532, "Nevada": 45.20037688442213, "Orange": 39.09097210188875, "Placer": 31.45324838478105, "Plumas ": 49.48133524766691, "Riverside": 57.109438545276326, "Sacramento ": 53.94834139049676, "San Benito": 42.850616719963455, "San Bernardino": 61.84844522339222, "San Diego": 45.49120400715326, "San Francisco": 34.611789517535854, "San Joaquin": 64.00527818950866, "San Luis Obispo": 44.7253092385002, "San Mateo": 22.844591547480995, "Santa Barbara": 50.418616068850014, "Santa Clara": 26.99606905495218, "Santa Cruz": 45.83470235794356, "Shasta ": 59.11405988274705, "Sierra": 56.570351758794, "Siskiyou": 73.07250538406318, "Solano": 41.46784454185824, "Sonoma": 38.18816303740927, "Stanislaus": 65.59994119533842, "Sutter": 62.52931323283081, "Tehama": 74.2941982640475, "Trinity": 71.51256281407036, "Tulare": 79.11254992913287, "Tuolumne": 49.40577889447236, "Ventura": 39.204306415799934, "Yolo": 57.45863463659762, "Yuba": 64.07124910265613}, "Unemployment Pctl": {"Alameda": 38.27801740165092, "Alpine": 93.2977615825091, "Amador": 59.89791196714673, "Butte": 66.78569104633004, "Calaveras": 68.32216293597084, "Colusa ": 32.18375845913586, "Contra Costa": 42.614685551938365, "Del Norte": 67.4834535584145, "El Dorado": 48.113914246898844, "Fresno": 69.78143095574146, "Glenn": 43.10905778240501, "Humboldt": 66.99170818769986, "Imperial": 91.19087900646981, "Inyo": 24.57313899010935, "Kern": 74.17087005690286, "Kings": 64.6283185840708, "Lake": 66.3444702096446, "Lassen": 51.254926749460864, "Los Angeles": 52.05284500012965, "Madera": 73.53251034927246, "Marin": 26.538465464270043, "Mariposa": 69.48984903695991, "Mendocino ": 66.65365261148708, "Merced": 83.86690959569667, "Modoc": 51.43154606975534, "Mono": 0.0780843310775638, "Monterey": 38.4341367746934, "Napa": 34.790659626682526, "Nevada": 41.335531262652566, "Orange": 37.98477355543983, "Placer": 35.708184557632116, "Plumas ": 52.17985424258199, "Riverside": 63.081365083592665, "Sacramento ": 53.43575351808998, "San Benito": 59.96166769201645, "San Bernardino": 63.814823964684116, "San Diego": 50.01926422641717, "San Francisco": 32.66422330711763, "San Joaquin": 67.62920012007127, "San Luis Obispo": 28.74432959024318, "San Mateo": 26.167583358448166, "Santa Barbara": 46.60750894917128, "Santa Clara": 33.39303159741288, "Santa Cruz": 42.00830774787792, "Shasta ": 46.94169703279542, "Sierra": 48.2561166059344, "Siskiyou": 70.8284947743563, "Solano": 50.69857054814603, "Sonoma": 33.95682073481466, "Stanislaus": 73.71263211459386, "Sutter": 69.967464862051, "Tehama": 66.47697695329137, "Trinity": 85.25507548152002, "Tulare": 69.322054485511, "Tuolumne": 42.73945861530454, "Ventura": 43.27917007510966, "Yolo": 53.94293336803747, "Yuba": 64.00684167472296}, "Education Pctl": {"Alameda": 38.913197974624126, "Alpine": 37.2817008352316, "Amador": 35.775752973930636, "Butte": 41.141979444270746, "Calaveras": 39.479878511769165, "Colusa ": 75.59098962288029, "Contra Costa": 34.419515275719775, "Del Norte": 62.450735799255156, "El Dorado": 25.42837256390786, "Fresno": 63.65425962996193, "Glenn": 70.99679406057538, "Humboldt": 37.701003965240865, "Imperial": 75.30637404985264, "Inyo": 43.97199021344807, "Kern": 65.9278144019202, "Kings": 69.26938327849491, "Lake": 50.95418881295874, "Lassen": 36.65035574678703, "Los Angeles": 58.133929932046186, "Madera": 68.76850109493469, "Marin": 21.471357462245837, "Mariposa": 39.73677549987345, "Mendocino ": 47.6828650974437, "Merced": 78.26848279174997, "Modoc": 53.89141989369777, "Mono": 42.64743103011893, "Monterey": 61.51023110020836, "Napa": 47.91065553024551, "Nevada": 21.84856598595959, "Orange": 42.46671111358041, "Placer": 21.842417171324335, "Plumas ": 18.841522941750732, "Riverside": 56.347946081142055, "Sacramento ": 42.01524049351386, "San Benito": 60.140125629875065, "San Bernardino": 59.968238640740445, "San Diego": 41.343002671252755, "San Francisco": 38.56926671092612, "San Joaquin": 64.758944552786, "San Luis Obispo": 32.155919821737854, "San Mateo": 32.91130869277685, "Santa Barbara": 50.34183280064512, "Santa Clara": 39.08410372071346, "Santa Cruz": 37.31285166364893, "Shasta ": 35.5999008689783, "Sierra": 32.6246519868388, "Siskiyou": 43.74299454026105, "Solano": 41.70749577055778, "Sonoma": 38.44391779091857, "Stanislaus": 65.21632013441253, "Sutter": 64.96366200238637, "Tehama": 54.666252502243395, "Trinity": 31.04277398127055, "Tulare": 74.68297542329435, "Tuolumne": 39.57571155748835, "Ventura": 43.96370329434987, "Yolo": 37.89989875980764, "Yuba": 58.847669667715245}, "PM2.5 Pctl": {"Alameda": 31.870669985480188, "Alpine": 0.074673304293715, "Amador": 18.93106547742516, "Butte": 23.00767475627463, "Calaveras": 22.614810205351585, "Colusa ": 13.309271935283135, "Contra Costa": 31.01990386262998, "Del Norte": 2.9300382256200583, "El Dorado": 8.913977538744188, "Fresno": 91.392744681716, "Glenn": 11.976768305330841, "Humboldt": 3.537855216760009, "Imperial": 37.75779352429894, "Inyo": 0.6409458618543877, "Kern": 81.0872960598705, "Kings": 90.16386641775564, "Lake": 0.3758556316116987, "Lassen": 1.1339279540897464, "Los Angeles": 71.22578050946015, "Madera": 70.78109358513026, "Marin": 19.680941336199584, "Mariposa": 21.742377100186676, "Mendocino ": 5.73615432482887, "Merced": 73.07443201300437, "Modoc": 0.6969508400746725, "Mono": 0.15349512549263641, "Monterey": 2.0282232972680005, "Napa": 34.969508400746726, "Nevada": 8.12445550715619, "Orange": 64.96878989472606, "Placer": 12.245977420215135, "Plumas ": 13.138945684060804, "Riverside": 49.664725655280186, "Sacramento ": 30.86437686855028, "San Benito": 1.1019969451830067, "San Bernardino": 62.5763301814723, "San Diego": 43.12061763278481, "San Francisco": 26.999888309160227, "San Joaquin": 53.18655343304698, "San Luis Obispo": 9.751206396543424, "San Mateo": 20.379074035172557, "Santa Barbara": 11.08213364284067, "Santa Clara": 19.4835765568648, "Santa Cruz": 3.642477621942464, "Shasta ": 24.503992947521265, "Sierra": 4.66708151835719, "Siskiyou": 0.2444661747710907, "Solano": 25.55680875337066, "Sonoma": 8.562161754445514, "Stanislaus": 61.09759165353704, "Sutter": 37.18315702136489, "Tehama": 7.314589579679812, "Trinity": 0.4231487243310517, "Tulare": 92.50969316930737, "Tuolumne": 17.480341686937834, "Ventura": 36.197272769782515, "Yolo": 30.99852778241535, "Yuba": 21.12810027558005}, "Drinking Water Pctl": {"Alameda": 10.634479552613694, "Alpine": 71.7372299238167, "Amador": 60.79125209885794, "Butte": 28.509857795997114, "Calaveras": 41.15399025852377, "Colusa ": 24.266267016360676, "Contra Costa": 14.344513767844452, "Del Norte": 34.24503559385538, "El Dorado": 26.765270864184316, "Fresno": 80.7578091392254, "Glenn": 45.39777694517295, "Humboldt": 15.839473793763794, "Imperial": 47.12247750959846, "Inyo": 45.24998959243993, "Kern": 75.3964453288802, "Kings": 58.21204522965482, "Lake": 45.802422879980014, "Lassen": 32.066386356382594, "Los Angeles": 68.79737967885141, "Madera": 74.39903128241049, "Marin": 10.742418565573308, "Mariposa": 54.07351900420466, "Mendocino ": 19.46858998376421, "Merced": 78.20019727636277, "Modoc": 26.642312976145874, "Mono": 62.753424087256974, "Monterey": 54.47196069030998, "Napa": 53.41295116772826, "Nevada": 39.66779068315225, "Orange": 46.03989121202794, "Placer": 14.77695112015082, "Plumas ": 32.960445324626676, "Riverside": 50.10684941142138, "Sacramento ": 40.429765910664145, "San Benito": 60.5277200631266, "San Bernardino": 67.24808727146356, "San Diego": 33.23862786196265, "San Francisco": 15.412347529245173, "San Joaquin": 68.26293180517406, "San Luis Obispo": 59.77057810265074, "San Mateo": 35.73832573917178, "Santa Barbara": 32.60537833992959, "Santa Clara": 32.54702538504608, "Santa Cruz": 36.08020866357323, "Shasta ": 27.82591274301654, "Sierra": 66.1795928562508, "Siskiyou": 20.643544041820558, "Solano": 27.596905339406955, "Sonoma": 29.981215931009867, "Stanislaus": 94.54426844596092, "Sutter": 64.79271113965756, "Tehama": 41.93943935420143, "Trinity": 17.402273011115263, "Tulare": 77.24827314561296, "Tuolumne": 59.669380201414675, "Ventura": 59.36979997993087, "Yolo": 38.44014536061432, "Yuba": 59.768238505593324}, "Groundwater Threats Pctl": {"Alameda": 66.68276237386314, "Alpine": 35.0157728706625, "Amador": 46.97179331082703, "Butte": 33.12107509449074, "Calaveras": 28.920803586252696, "Colusa ": 64.14411422878966, "Contra Costa": 42.842373157325234, "Del Norte": 44.50084201038877, "El Dorado": 25.806630140018818, "Fresno": 27.540158037406034, "Glenn": 72.97304776135925, "Humboldt": 63.363218772483265, "Imperial": 45.370702629168825, "Inyo": 21.445569760363053, "Kern": 28.6714393940227, "Kings": 47.41638533768701, "Lake": 32.38031988488572, "Lassen": 61.44593871640195, "Los Angeles": 38.208896059202125, "Madera": 47.13092565455609, "Marin": 34.906494800235464, "Mariposa": 29.79412253030053, "Mendocino ": 72.81670263988045, "Merced": 64.61862181365989, "Modoc": 55.10127843267472, "Mono": 32.154518789086296, "Monterey": 33.24406977553787, "Napa": 43.26083347169185, "Nevada": 28.10642536941723, "Orange": 28.26399146912778, "Placer": 31.809215467691306, "Plumas ": 35.58976305116103, "Riverside": 14.137234786885749, "Sacramento ": 35.59457411154193, "San Benito": 32.28382110998747, "San Bernardino": 16.221377222903893, "San Diego": 36.77127099971106, "San Francisco": 31.109209568449156, "San Joaquin": 51.96435247617945, "San Luis Obispo": 33.16406604870011, "San Mateo": 58.661119635875664, "Santa Barbara": 54.3431825940636, "Santa Clara": 54.23685013898334, "Santa Cruz": 51.05141828120411, "Shasta ": 29.812455033482763, "Sierra": 56.5498920803586, "Siskiyou": 64.17186499371458, "Solano": 38.82028612540818, "Sonoma": 61.21399953377376, "Stanislaus": 40.63059689629471, "Sutter": 48.833440067044585, "Tehama": 40.844942870511524, "Trinity": 70.43665947202388, "Tulare": 41.857707846417796, "Tuolumne": 49.0226857651729, "Ventura": 31.284795566897248, "Yolo": 44.122732776389704, "Yuba": 53.37515713574154}, "Haz. Waste Pctl": {"Alameda": 54.85311419957351, "Alpine": 74.7319655857048, "Amador": 60.89859548496213, "Butte": 39.98909954451667, "Calaveras": 10.451356717405698, "Colusa ": 37.117140966247504, "Contra Costa": 49.17401215562529, "Del Norte": 34.227096530207056, "El Dorado": 25.787400334058173, "Fresno": 41.45951464802505, "Glenn": 42.709022722259, "Humboldt": 39.969556585043016, "Imperial": 44.77402275784036, "Inyo": 37.59541142731084, "Kern": 49.82858595465484, "Kings": 34.952570041914846, "Lake": 5.788660930950817, "Lassen": 24.513567174056913, "Los Angeles": 52.026829569358064, "Madera": 35.53304750669007, "Marin": 38.66963479935021, "Mariposa": 11.129494815795283, "Mendocino ": 41.88550628722701, "Merced": 24.02544604870407, "Modoc": 4.609530112508282, "Mono": 46.42400176483563, "Monterey": 34.542672729731066, "Napa": 34.570152217074785, "Nevada": 28.059563203176715, "Orange": 52.293012751847264, "Placer": 39.52475497147897, "Plumas ": 22.592417509690844, "Riverside": 37.587083974328046, "Sacramento ": 42.50779248706123, "San Benito": 57.40689489200407, "San Bernardino": 43.82757699185199, "San Diego": 44.938373247962595, "San Francisco": 67.66210185138043, "San Joaquin": 39.94048440929588, "San Luis Obispo": 45.8626674824869, "San Mateo": 54.36590270078872, "Santa Barbara": 53.673212918002086, "Santa Clara": 53.95703906122121, "Santa Cruz": 48.09321386753549, "Shasta ": 31.78937789543348, "Sierra": 16.6379880873594, "Siskiyou": 19.0583341212064, "Solano": 49.83702845797484, "Sonoma": 39.106084003502914, "Stanislaus": 36.80597603390736, "Sutter": 36.88254388452932, "Tehama": 25.095962938451354, "Trinity": 16.672402382528126, "Tulare": 39.93636409917019, "Tuolumne": 26.8912821129896, "Ventura": 43.875548482611194, "Yolo": 49.544640118803564, "Yuba": 46.3978443793136}, "Tox. Release Pctl": {"Alameda": 48.276652496457466, "Alpine": 3.85096274068517, "Amador": 14.378594648662167, "Butte": 4.451848256181692, "Calaveras": 11.057764441110274, "Colusa ": 8.10452613153289, "Contra Costa": 57.857821943408545, "Del Norte": 3.0543350123245103, "El Dorado": 10.363305111992284, "Fresno": 64.28780561974665, "Glenn": 7.768608818871378, "Humboldt": 9.659914978744684, "Imperial": 22.81134799828989, "Inyo": 4.053096607485203, "Kern": 24.463317816209027, "Kings": 43.40205421725801, "Lake": 0.4517796115695585, "Lassen": 4.313578394598652, "Los Angeles": 76.95144016477876, "Madera": 58.27924372397448, "Marin": 40.446475255177425, "Mariposa": 5.443027423522548, "Mendocino ": 0.0, "Merced": 16.97618282121552, "Modoc": 1.9661165291322837, "Mono": 2.4172709844127698, "Monterey": 4.358750978067098, "Napa": 46.03650912728181, "Nevada": 13.168292073018256, "Orange": 79.29203091150802, "Placer": 15.120595625096755, "Plumas ": 6.615939699210523, "Riverside": 34.71612936346669, "Sacramento ": 22.43786498675142, "San Benito": 11.199390756780103, "San Bernardino": 49.301315843866135, "San Diego": 32.0830606375677, "San Francisco": 44.51138425632047, "San Joaquin": 35.69219643040257, "San Luis Obispo": 14.698957758307506, "San Mateo": 31.877635013849005, "Santa Barbara": 12.056525367296878, "Santa Clara": 32.13928482120531, "Santa Cruz": 14.420912920537829, "Shasta ": 4.850431357839459, "Sierra": 51.5378844711178, "Siskiyou": 5.942557067838384, "Solano": 56.313166833375, "Sonoma": 8.999598384444592, "Stanislaus": 39.79877948210458, "Sutter": 9.31066099858297, "Tehama": 3.561117552115302, "Trinity": 1.192798199549888, "Tulare": 47.34965792730235, "Tuolumne": 4.6966287026302025, "Ventura": 31.572343953040303, "Yolo": 41.675967772430916, "Yuba": 7.193762726395891}, "Diesel PM Pctl": {"Alameda": 66.35729101846093, "Alpine": 1.02053515868077, "Amador": 4.177556523542835, "Butte": 33.10028429542321, "Calaveras": 3.07778469197262, "Colusa ": 10.61107654013691, "Contra Costa": 48.61352356387662, "Del Norte": 11.087207751800163, "El Dorado": 13.5846149287344, "Fresno": 44.758015341173845, "Glenn": 22.466293300145196, "Humboldt": 15.751503837378133, "Imperial": 29.752494128510346, "Inyo": 4.536403235843186, "Kern": 38.985481564512874, "Kings": 28.47910760791906, "Lake": 11.907902924704427, "Lassen": 8.002489110143124, "Los Angeles": 59.466902298177274, "Madera": 29.432104109737285, "Marin": 26.971544945409295, "Mariposa": 0.4874507363617506, "Mendocino ": 13.04853764779092, "Merced": 40.780259832620054, "Modoc": 3.419415059116365, "Mono": 2.2858328147687206, "Monterey": 31.905708225438428, "Napa": 35.918170504044824, "Nevada": 12.334785314250158, "Orange": 51.161028746655994, "Placer": 34.9294752126115, "Plumas ": 3.230509378611433, "Riverside": 41.43876610469371, "Sacramento ": 45.54906668184738, "San Benito": 35.0987158454489, "San Bernardino": 46.20570910127277, "San Diego": 49.519754582473645, "San Francisco": 81.57943612081759, "San Joaquin": 50.03478486656849, "San Luis Obispo": 23.42440502048819, "San Mateo": 51.44229664009768, "Santa Barbara": 38.86871342371507, "Santa Clara": 56.823808472342066, "Santa Cruz": 36.719640036379296, "Shasta ": 28.85293507571043, "Sierra": 0.920970752955818, "Siskiyou": 6.707262867810473, "Solano": 43.54257415473969, "Sonoma": 34.872307392531404, "Stanislaus": 51.13916508890626, "Sutter": 42.61534358609654, "Tehama": 20.009051309611348, "Trinity": 0.6571250777846913, "Tulare": 36.17857769693487, "Tuolumne": 7.706058720371107, "Ventura": 37.457726492836635, "Yolo": 40.97985945634192, "Yuba": 26.74104364832429}}];