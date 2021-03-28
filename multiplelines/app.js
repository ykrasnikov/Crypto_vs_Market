getData('gold')

d3.selectAll("#selDataset").on("change", updateChoice);
d3.selectAll("#selDataset2").on("change", updateChoice2);

function updateChoice() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let choice = dropdownMenu.property("value");
  getData(choice)
  console.log(choice)
}

function updateChoice2() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset2");
  // Assign the value of the dropdown menu option to a variable
  let choice = dropdownMenu.property("value");
  getData2(choice)
  console.log(choice)
}

function getData(choice){
  
if (choice == 'dollar' ) {
  const dollarLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/dollar/';

d3.json(dollarLink).then((data, i) => {
  // Once we get a response, send the data.features object to the createFeatures function
  let closeDollar = data.map((values, i) => data[i].Close);
  let dateDollar = data.map((values, i) => (data[i].Date.$date)); 
  // console.log(closeDollar);
  graphData(closeDollar, dateDollar, "Dollar");
}); 
}
else if (choice == 'gold'){
const goldLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com//api/gold/';
d3.json(goldLink).then((data, i) => {
  // Once we get a response, send the data.features object to the createFeatures function
  let closeGold = data.map((values, i) => data[i].Close);
  let date = data.map((values, i) => (data[i].Date.$date)); 
  // console.log(date);
  graphData(closeGold, date, "Gold");
  
});
}

else if (choice == 'snp'){
  const snpLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/snp500/';
  d3.json(snpLink).then((data, i) => {
    // Once we get a response, send the data.features object to the createFeatures function
    let closeSnp = data.map((values, i) => data[i].Close);
    let date = data.map((values, i) => (data[i].Date.$date));
    // console.log(closeSnp);
    graphData(closeSnp, date, "S&P 500");
  });
}

else if (choice == 'vix'){
  const vixLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/vix/';
  d3.json(vixLink).then((data, i) => {
    // Once we get a response, send the data.features object to the createFeatures function
    let closeVix = data.map((values, i) => data[i].Close);
    let date = data.map((values, i) => (data[i].Date.$date));
    // console.log(closeVix);
    graphData(closeVix, date, "Vix");
  });
}

else if (choice == 'bitcoin'){
  const cryptoLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/BTC/01-01-2013,01-01-2021';
  d3.json(cryptoLink).then((data, i) => {
    // Once we get a response, send the data.features object to the createFeatures function
    let closeCrypto = data.map((values, i) => data[i].Close);
    let date = data.map((values, i) => (data[i].Date.$date));
    console.log(closeCrypto);
    graphData(closeCrypto, date, "Bitcoin");
  });
}
else if (choice == 'litecoin'){
  const cryptoLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/LTC/01-01-2013,01-01-2021';
  d3.json(cryptoLink).then((data, i) => {
    // Once we get a response, send the data.features object to the createFeatures function
    let closeCrypto = data.map((values, i) => data[i].Close);
    let date = data.map((values, i) => (data[i].Date.$date));
    console.log(closeCrypto);
    graphData(closeCrypto, date, "Litecoin");
  });
}
else if (choice == 'etherum'){
  const cryptoLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/ETC/01-01-2013,01-01-2021';
  d3.json(cryptoLink).then((data, i) => {
    // Once we get a response, send the data.features object to the createFeatures function
    let closeCrypto = data.map((values, i) => data[i].Close);
    let date = data.map((values, i) => (data[i].Date.$date));
    console.log(closeCrypto);
    graphData(closeCrypto, date, "Etherum");
  });
}
else {
  graphData("none", "none" , "none")
  console.log('no data selected');
}
};
//Scrape data function
function scrapData
// Get data for second axis on the graph
function getData2(choice){
  if (choice == 'dollar' ) {
    const dollarLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/dollar/';
  
  d3.json(dollarLink).then((data, i) => {
    // Once we get a response, send the data.features object to the createFeatures function
    let closeDollar = data.map((values, i) => data[i].Close);
    let dateDollar = data.map((values, i) => (data[i].Date.$date)); 
    // console.log(closeDollar);
    graph2Data(closeDollar, dateDollar, "Dollar");
  }); 
  }
  else if (choice == 'gold'){
  const goldLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com//api/gold/';
  d3.json(goldLink).then((data, i) => {
    // Once we get a response, send the data.features object to the createFeatures function
    let closeGold = data.map((values, i) => data[i].Close);
    let date = data.map((values, i) => (data[i].Date.$date)); 
    // console.log(date);
    graph2Data(closeGold, date, "Gold");
    
  });
  }
  
  else if (choice == 'snp'){
    const snpLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/snp500/';
    d3.json(snpLink).then((data, i) => {
      // Once we get a response, send the data.features object to the createFeatures function
      let closeSnp = data.map((values, i) => data[i].Close);
      let date = data.map((values, i) => (data[i].Date.$date));
      // console.log(closeSnp);
      graph2Data(closeSnp, date, "S&P 500");
    });
  }
  
  else if (choice == 'vix'){
    const vixLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/vix/';
    d3.json(vixLink).then((data, i) => {
      // Once we get a response, send the data.features object to the createFeatures function
      let closeVix = data.map((values, i) => data[i].Close);
      let date = data.map((values, i) => (data[i].Date.$date));
      // console.log(closeVix);
      graph2Data(closeVix, date, "VIX");
    });
  }
  
  else if (choice == 'crypto'){
    const cryptoLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/LTC';
    d3.json(cryptoLink).then((data, i) => {
      // Once we get a response, send the data.features object to the createFeatures function
      let closeCrypto = data.map((values, i) => data[i].Close);
      // console.log(closeCrypto);
      graph2Data(closeCrypto);
    });
  }
  
  else {
    graph2Data("none")
    console.log('no data selected')
  }
  };
// d3.select(window).on("resize", makeResponsive);
let svgArea = d3.select("body").select("svg");

if (!svgArea.empty()) {
  svgArea.remove();
}

  // svg params
let svgHeight = window.innerHeight;
let svgWidth = window.innerWidth;

  // margins
let margin = {
  top: 50,
  right: 100,
  bottom: 100,
  left: 100
};

// Define dimensions of the chart area
let chartWidth = svgWidth - margin.left - margin.right;
let chartHeight = svgHeight - margin.top - margin.bottom;


// Select body, append SVG area to it, and set its dimensions
let svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
let chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load data from forcepoints.csv
function graphData(x, y, choice){
  if (x == "none"){
    d3.select("#line").remove()
    d3.select("#lineName").remove()
  }
  else{
  d3.select("#line").remove()
  d3.select("#lineName").remove()
  d3.select("#yAxis").remove()
  d3.select("#xAxis").remove()

  // console.log(x);
  // console.log(y);
  //Build data array from user selection
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
  
  let yLinearScale = d3.scaleLinear()
                      .domain([0, d3.max(dataArray, record => record[0])])
                      .range([chartHeight, 0]);

  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes
  let bottomAxis = d3.axisBottom(xTimeScale);
  let leftAxis = d3.axisLeft(yLinearScale);
  

  // Configure a line function called drawLine which will plot the x and y coordinates using our scales
  let lineGen = d3.line()
    .x( d => xTimeScale(d[1]))
    .y ( d => yLinearScale(d[0]));

  
    
  // Append an SVG path and plot its points using the line function
  chartGroup.append('path')
  // The drawLine function returns the instructions for creating the line for forceData
            .attr('d', lineGen(dataArray))
            .attr('id', "line")
            .classed("line green", true);

  // Append an SVG group element to the chartGroup, create the left axis inside of it
  chartGroup.append("g")
  .attr("id", "yAxis")
    .classed("axis", true)
    .call(leftAxis);
  
    
  // Append an SVG group element to the chartGroup, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  chartGroup.append("g")
    .attr("id", "xAxis")
    .classed("axis", true)
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);

  // Append axes titles
  chartGroup.append("text")
  .attr("id", "lineName")
  .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + 40})`)
    .classed("green-text text", true)
    .text(`${choice} Cost at Close`);
}};

// Draws second line
function graph2Data(x, y, choice){
  if (x == "none"){
    d3.select("#line2").remove()
    d3.select("#lineName2").remove()
  }
  else{
  d3.select("#line2").remove()
  d3.select("#lineName2").remove()
  d3.select("#yAxis2").remove()
  // d3.select("#xAxis2").remove()
  // console.log(x);
  // console.log(y);
  let dataArray = [];
  for (var i = 0; i < x.length; i++) {
        dataArray.push([ x[i], y[i]])
    }
  // console.log(dataArray);
  // console.log(dataArray[0][0]);
  // console.log(dataArray[0][1])
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
                    .range([0, chartWidth])
  
  let yLinearScale2 = d3.scaleLinear()
                      .domain([0, d3.max(dataArray, record => record[0])])
                      .range([chartHeight, 0]);

  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes
  let bottomAxis = d3.axisBottom(xTimeScale);
  let rightAxis = d3.axisRight(yLinearScale2);

  // Configure a line function called drawLine which will plot the x and y coordinates using our scales
  let lineGen = d3.line()
    .x( d => xTimeScale(d[1]))
    .y ( d => yLinearScale2(d[0]));

  // Append an SVG path and plot its points using the line function
  chartGroup.append('path')
  // The drawLine function returns the instructions for creating the line for forceData
            .attr('d', lineGen(dataArray))
            .attr('id', "line2")
            .classed("line orange", true);

  chartGroup.append("g")
    .attr("id", "yAxis2")
    .classed("axis", true)
    .call(rightAxis)
    .attr('transform', `translate(${chartWidth}, 0)`);
    
  // Append an SVG group element to the chartGroup, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  // chartGroup.append("g")
  //   .attr("id", "xAxis2")
  //   .classed("axis", true)
  //   .attr("transform", `translate(0, ${chartHeight})`)
  //   .call(bottomAxis);

    chartGroup.append("text")
    .attr("id", "lineName2")
    .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + 60})`)
      .classed("orange-text text", true)
      .text(`${choice} Cost at Close`);
}};


