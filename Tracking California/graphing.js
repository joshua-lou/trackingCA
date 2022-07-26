const counties = Object.keys(DATA);

const NORMAL_MARKER_SIZE = 14;
const BIG_MARKER_SIZE = 20;
const NORMAL_COLOR = "#D0D0D0";
const CHOSEN_COLOR = "#888888";

const indicatorToX = {};
const XToIndicator = {};
for (let i = 0; i < indicators.length; i++) {
  indicatorToX[indicators[i]] = i + 1;
  XToIndicator[i + 1] = indicators[i];
}

const dataSeries = {};
for (const [countyName, countyValues] of Object.entries(DATA)) {
  const dataPoints = [];
  for (const [indicatorName, indicatorValue, indicatorColor] of Object.entries(
    countyValues
  )) {
    if (indicatorValue !== "") {
      dataPoints.push({
        x: indicatorToX[indicatorName],
        y: indicatorValue,
        yRounded: indicatorValue.toFixed(2),
      });
    }
  }
  dataSeries[countyName] = {
    type: "scatter",
    toolTipContent:
      '<span style="color:#4F81BC "><b>{name}</b></span><br/><b> Percentile:</b></span> {yRounded}',
    name: countyName,
    markerSize: NORMAL_MARKER_SIZE,
    dataPoints: dataPoints,
    color: NORMAL_COLOR,
  };
}

const textSize = 16;
window.onload = function () {
  const data = Object.values(dataSeries);
  const chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    height: 700,
    title: {
      text: "California County Indicators",
    },
    axisX: {
      title: "Indicator",
      interval: 1,
      labelFontSize: textSize,
      labelFormatter: (e) => {
        return XToIndicator[e.value] === undefined ? "" : XToIndicator[e.value];
      },
    },
    axisY: {
      title: "Percentile",
      interval: 10,
      maximum: 100,
      labelFontSize: textSize,
      includeZero: true,
    },
    data: data,
  });
  chart.render();

  let countiesOptions = '<option value="" selected>-</option>';
  for (let i = 0; i < counties.length; i++) {
    countiesOptions +=
      '<option value="' + counties[i] + '">' + counties[i] + "</option>";
  }
  document.getElementById("counties").innerHTML = countiesOptions;
  document.getElementById("counties2").innerHTML = countiesOptions;

  const selected = ["", ""];
  function handleDropdownChange(event, index) {
    const countyName = event.target.value;

    // Don't let it select the other one
    document.getElementById("counties-error").innerHTML = "";
    if (countyName !== "" && countyName === selected[1 - index]) {
      document.getElementById("counties-error").innerHTML =
        "You can't select the same one";
      event.target.value = selected[index];
      return;
    }

    if (selected[index] !== "") {
      dataSeries[selected[index]].markerSize = NORMAL_MARKER_SIZE;
      dataSeries[selected[index]].color = NORMAL_COLOR;
    }
    selected[index] = countyName;
    if (countyName !== "") {
      dataSeries[countyName].markerSize = BIG_MARKER_SIZE;
      dataSeries[countyName].color = CHOSEN_COLOR;

      // Look through data array to find where this county is
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === countyName) {
          // When found, remove it from the array
          data.splice(i, 1);
          // Then add it back to the end of the array
          data.push(dataSeries[countyName]);
          // Then stop searching
          break;
        }
      }
    }

    chart.render();
  }
  document.getElementById("counties").onchange = (event) =>
    handleDropdownChange(event, 0);
  document.getElementById("counties2").onchange = (event) =>
    handleDropdownChange(event, 1);
};
