const counties = Object.keys(DATA);

const NORMAL_MARKER_SIZE = 14;
const BIG_MARKER_SIZE = 20;
const NORMAL_COLOR = "#D0D0D0";

const indicatorToY = {};
const YToIndicator = {};
for (let i = 0; i < indicators.length; i++) {
  indicatorToY[indicators[i]] = i + 1;
  YToIndicator[i + 1] = indicators[i];
}

const countyColors = {};
for (let i = 0; i < counties.length; i++) {
  const color = Math.floor(
    Math.random() * (parseInt("FFFFFF", 16) + 1)
  ).toString(16);
  countyColors[counties[i]] = "#" + ("00000" + color).slice(-6);
}

const dataSeries = {};
for (const [countyName, countyValues] of Object.entries(DATA)) {
  const dataPoints = [];
  for (const [indicatorName, indicatorValue] of Object.entries(countyValues)) {
    if (indicatorValue !== "") {
      dataPoints.push({
        y: indicatorToY[indicatorName],
        x: indicatorValue,
        value: indicatorValue.toFixed(2),
      });
    }
  }
  dataSeries[countyName] = {
    type: "scatter",
    toolTipContent:
      '<span style="color:#4F81BC "><b>{name}</b></span><br/><b> Percentile:</b></span> {value}',
    name: countyName,
    markerSize: NORMAL_MARKER_SIZE,
    dataPoints: dataPoints,
    color: NORMAL_COLOR,
  };
}

const textSize = 16;
const NUM_DROPDOWNS = 3;
window.onload = function () {
  const data = Object.values(dataSeries);
  const chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    height: 900,
    width: 1000,
    title: {
      text: "California County Indicators",
    },
    axisY: {
      title: "Indicator",
      interval: 1,
      labelFontSize: textSize,
      gridThickness: 0,
      labelFormatter: (e) => {
        return YToIndicator[e.value] === undefined ? "" : YToIndicator[e.value];
      },
    },
    axisX: {
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
  let dropdowns = "";
  for (let i = 0; i < NUM_DROPDOWNS; i++) {
    dropdowns +=
      "<div>" +
      "<strong> Select a county </strong>" +
      '<select class="countyDropdown">' +
      countiesOptions +
      "</select>" +
      "</div>";
  }
  document.getElementById("countiesDropdowns").innerHTML = dropdowns;

  const selected = new Array(NUM_DROPDOWNS).fill("");
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
      Object.assign(dataSeries[selected[index]], {
        markerSize: NORMAL_MARKER_SIZE,
        color: NORMAL_COLOR,
        showInLegend: false,
      });
    }
    selected[index] = countyName;
    if (countyName !== "") {
      Object.assign(dataSeries[countyName], {
        markerSize: BIG_MARKER_SIZE,
        color: countyColors[countyName],
        showInLegend: true,
      });

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
  const countyDropdowns = document.getElementsByClassName("countyDropdown");
  for (let i = 0; i < countyDropdowns.length; i++) {
    countyDropdowns[i].onchange = (event) => handleDropdownChange(event, i);
  }
};
