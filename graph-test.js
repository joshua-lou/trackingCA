const indicatorToX = {};
const XToIndicator = {};
const indicators = ["Poverty","Education","KDR"];
for(let i = 0; i < indicators.length; i++) {
  indicatorToX[indicators[i]] = i+1;
  XToIndicator[i+1] = indicators[i];
}
window.onload = function () {
    const chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "California County Indicators",
      },
      axisX: {
        title: "Indicator",
        interval: 1,
        labelFormatter: (e) => {
          return XToIndicator[e.value] === undefined ? "" : XToIndicator[e.value];
        },
      },
      axisY: {
        title: "Percentile",
        includeZero: true,
      },
      data: [
        {
          type: "scatter",
          toolTipContent:
            '<span style="color:#4F81BC "><b>{name}</b></span><br/><b> Load:</b> {x} TPS<br/><b> Response Time:</b></span> {y} ms',
          name: "Orange",
          showInLegend: true,
          dataPoints: [
            { x: 1, y: 33.0 },
            { x: 2, y: 39.0 },
            { x: 3, y: 40.2 },
            /* { x: 34, y: 430 },
            { x: 24, y: 321 },
            { x: 29, y: 250 },
            { x: 29, y: 370 },
            { x: 23, y: 290 },
            { x: 27, y: 250 },
            { x: 34, y: 380 },
            { x: 36, y: 320 },
            { x: 33, y: 405 },
            { x: 32, y: 453 },
            { x: 21, y: 292 }, */
          ],
        },
        {
          type: "scatter",
          name: "Los Angeles",
          showInLegend: true,
          toolTipContent:
            '<span style="color:#C0504E "><b>{name}</b></span><br/><b> Load:</b> {x} TPS<br/><b> Response Time:</b></span> {y} ms',
          dataPoints: [
            { x: 1, y: 20.0 },
            { x: 2, y: 68.4 },
            { x: 3, y: 3.0 },
            /* { x: 32, y: 190 },
            { x: 29, y: 189 },
            { x: 22, y: 150 },
            { x: 27, y: 200 },
            { x: 26, y: 190 },
            { x: 24, y: 225 },
            { x: 33, y: 330 },
            { x: 34, y: 250 },
            { x: 30, y: 120 },
            { x: 37, y: 153 },
            { x: 24, y: 196 }, */
          ],
        },
      ],
    });
    chart.render();
  };