function makeResponsive() {
scrapeData('BTC', 1, "01-01-2013", "01-01-2021");
scrapeData('LTC', 2, "01-01-2013", "01-01-2021");


d3.selectAll("#selDataset").on("change", updateChoice);
d3.selectAll("#startyear").on("change", updateChoice);
d3.selectAll("#endyear").on("change", updateChoice);
d3.selectAll("#selDataset2").on("change", updateChoice);

function updateChoice() {
  // Use D3 to select the dropdown menu
  // Assign the value of the dropdown menu option to a variable
  let dropdownMenu = d3.select("#selDataset");
  let choice = dropdownMenu.property("value");
  let dropdownDate = d3.select("#startyear");
  let start = dropdownDate.property("value");
  let dropdownEnd = d3.select("#endyear");
  let end = dropdownEnd.property("value");
  let dropdownMenu2 = d3.select("#selDataset2");
  // Assign the value of the dropdown menu option to a variable
  let choice2 = dropdownMenu2.property("value");
  //Send data selection to scrapeData function
  scrapeData(choice, 1, start, end)
  scrapeData(choice2, 2, start, end)
  // console.log("choice 1 dates:")
  // console.log(start)
  // console.log(end)
}

//Scrape data function
function scrapeData(coin, choiceNum, startYear, endYear){
  const baseLink = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api"
  if (coin == "none"){
    if (choiceNum == 1){graphData(coin, coin, coin)}
    else{graphData(coin, coin, coin)}
  }
  else if (coin == "BTC" || coin == "LTC" || coin == "ETC"){
    let link = `${baseLink}/crypto/${coin}/${startYear},${endYear}`
    // console.log(link),
    testlink(link);
  }
  else{
  let link = `${baseLink}/${coin}/`
    testlink(link);
  }
  function testlink(link){
    d3.json(link).then((data, i) => {
    // Once we get a response, send the data.features object to the createFeatures function
      let closeData = data.map((values, i) => data[i].Close);
      let date = data.map((values, i) => (data[i].Date.$date));
      // console.log(closeData);
      let coinUpper = coin.charAt(0).toUpperCase()+coin.slice(1);
      if (choiceNum == 1){
      graphData(closeData, date, coinUpper, 1);
      }
      else{
      graphData(closeData, date, coinUpper, 2);
      }
  });
};}

let svgArea = d3.select("body").select("svg");
  if (!svgArea.empty()) {
    svgArea.remove();
  }

  // SVG wrapper dimensions are determined by the current width
  // and height of the browser window.
  let svgWidth = window.innerWidth;
  let svgHeight = window.innerHeight;

  let margin = {
    top: 30,
    right: 100,
    bottom: 100,
    left: 100
  };

  let chartHeight = svgHeight - margin.top - margin.bottom;
  let chartWidth = svgWidth - margin.left - margin.right;

// Select body, append SVG area to it, and set its dimensions
let svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
let chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load data from forcepoints.csv
function graphData(x, y, choice, numChoice){
  d3.select("#xLabel").remove()
  if (x == "none"){
    d3.select("#line2").remove()
    d3.select("#lineName2").remove()
    d3.select("#yAxis2").remove()
    d3.select("#xAxis").remove()
    d3.select("#yRight").remove()
    d3.select("#line1").remove()
    d3.select("#lineName1").remove()
    d3.select("#yAxis").remove()
    d3.select("#xAxis").remove()
    d3.select("#yLeft").remove()
    

  }
  else if (numChoice == 1){
  d3.select("#line1").remove()
  d3.select("#lineName1").remove()
  d3.select("#yAxis").remove()
  d3.select("#xAxis").remove()
  d3.select("#yLeft").remove()
  buildGraph(x, y, choice, numChoice)
  }
  else{
    d3.select("#line2").remove()
    d3.select("#lineName2").remove()
    d3.select("#yAxis2").remove()
    d3.select("#xAxis").remove()
    d3.select("#yRight").remove()
    buildGraph(x, y, choice, numChoice)

  }
  // console.log(x);
  // console.log(y);
  //Build data array from user selection
  function buildGraph(x, y, choice, numChoice){
  let dataArray = [];

  for (var i = 0; i < x.length; i++) {
        dataArray.push([ x[i], y[i]])
    }

  // console.log(dataArray);
  // console.log(dataArray[0][0]);
  // console.log(dataArray[0][1])
  //Convert time from unix to date
  function convertTime(unixTime) {
    let dateObject=new Date(unixTime),
    // full date & time
      date=dateObject.toDateString();
    //  date, time & time zone 
    date=dateObject.toLocaleString("en-US", {timeZoneName: "short"});
    // month -date-year
    d=dateObject.getDate(),
    m=dateObject.getMonth()+1,
    y=dateObject.getFullYear(),
    date=m+'-'+d+'-'+y;
    return date;
}
//Parse time
let parseTime = d3.timeParse("%m-%e-%Y");
  dataArray.forEach(function(data) {
    data[0] = +data[0];
    data[1] = convertTime(data[1]);
    data[1] = parseTime(data[1]);
    // console.log(data[1]);
  });

  // Configure a time scale
  // d3.extent returns the an array containing the min and max values for the property specified
  let xTimeScale = d3.scaleTime()
                    .domain(d3.extent(dataArray, record => record[1]))
                    .range([0, chartWidth]);
  let bottomAxis = d3.axisBottom(xTimeScale);
// Append an SVG group element to the chartGroup, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  chartGroup.append("g")
    .attr("id", "xAxis")
    .classed("axis", true)
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);
  // Labels the x axis
  chartGroup.append("text")
    .attr("id", "xLabel")
    .attr("transform", `translate(${chartWidth/2}, ${chartHeight + 45})`)
    .classed(`label`, true)
    .text("Date");


  // Creates y axis on the left and draws the first line
  if (numChoice == 1){
  
    let yLinearScale = d3.scaleLinear()
                      .domain([0, d3.max(dataArray, record => record[0])])
                      .range([chartHeight, 0]);
    let leftAxis = d3.axisLeft(yLinearScale);
    chartGroup.append("g")
    .attr("id", "yAxis")
    .classed("axis", true)
    .call(leftAxis);
    chartGroup.append("text")
    .attr("id", "yLeft")
    .attr("transform", `translate(${-60}, ${chartHeight/2})rotate(270)`)
    .classed(`green-text label`, true)
    .text(`${choice} Cost at Close`);
    buildLine(yLinearScale, "green", 1);
  }
  //Creates y axis and graph 2  
  else{
    let yLinearScale = d3.scaleLinear()
                      .domain([0, d3.max(dataArray, record => record[0])])
                      .range([chartHeight, 0]);
    let rightAxis = d3.axisRight(yLinearScale);
    chartGroup.append("g")
    .attr("id", "yAxis2")
    .classed("axis", true)
    .call(rightAxis)
    .attr('transform', `translate(${chartWidth}, 0)`);
    chartGroup.append("text")
    .attr("id", "yRight")
    .attr("transform", `translate(${chartWidth + 40}, ${chartHeight/2})rotate(90)`)
    .classed(`orange-text label`, true)
    .text(`${choice} Cost at Close`);
    buildLine(yLinearScale, "orange", 2);
  }  
  // Configure a line function called drawLine which will plot the x and y coordinates using our scales
  function buildLine(yLinearScale, color, number){
  let lineGen = d3.line()
    .x( d => xTimeScale(d[1]))
    .y ( d => yLinearScale(d[0]));

  // Append an SVG path and plot its points using the line function
  chartGroup.append('path')
  // The drawLine function returns the instructions for creating the line
            .attr('d', lineGen(dataArray))
            .attr('id', `line${number}`)
            .classed(`line ${color}`, true);

  // Appends Line titles to bottom of graph
  chartGroup.append("text")
  .attr("id", `lineName${number}`)
  .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + 45 + (number*20)})`)
    .classed(`${color}-text text`, true)
    .text(`${choice} Cost at Close`);

}
}};
};

// When the browser loads, makeResponsive() is called.
makeResponsive();

// When the browser window is resized, responsify() is called.
d3.select(window).on("resize", makeResponsive);


