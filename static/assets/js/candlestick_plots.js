urlBTC = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/BTC/04-29-2013,02-27-2021";
urlETH = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/ETH/08-08-2015,02-27-2021";
urlLTC = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/LTC/04-29-2013,02-27-2021";


function init() {
    anychart.onDocumentReady(function () {

        // load data
        anychart.data.loadJsonFile(urlBTC, function (data) {

            let BTCData = data.map((element) => ({
                name: element.Name, symbol: element.Symbol, date: element.Date.$date,
                open: element.Open, high: element.High, low: element.Low, close: element.Close, volume: element.Volume, mktcap: element.Marketcap
            }))

            // create a data table
            let dataTable = anychart.data.table('date');
            dataTable.addData(BTCData);

            // map data
            let mapping = dataTable.mapAs({ 'open': 'open', 'high': 'high', 'low': 'low', 'close': 'close' });

            // set the chart type
            let chart = anychart.stock();

            // set the series
            let series = chart.plot(0).candlestick(mapping);
            series.name("Bitcoin Data");

            // set the chart title
            chart.title("Bitcoin Historical Price Data");

            // Add the EMA(9) technical indicator
            let plot = chart.plot(0);
            // create an EMA indicator with period 9
            let ema9 = plot.ema(mapping, 9).series();
            // set the EMA color
            ema9.stroke('#bf360c');

            // Add the EMA(30) technical indicator
            let plot2 = chart.plot(0);
            // create an EMA indicator with period 30
            let ema30 = plot.ema(mapping, 30).series();
            // set the EMA color
            ema30.stroke('#006400');

            // disable the scroller axis
            chart.scroller().xAxis(false);
            // map "open" values for the scroller
            openValue = dataTable.mapAs();
            openValue.addField('value', 'open');
            // create a scroller series with the mapped data
            chart.scroller().column(openValue);

            // set the container id
            chart.container('plot');

            // draw the chart
            chart.draw();

        });

    });
}

function clearPlot(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlot);

function updatePlot() {
    //Clear previous plot
    clearPlot('plot');
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");


    if (dataset === 'dataset1') {

        anychart.onDocumentReady(function () {

            // load data
            anychart.data.loadJsonFile(urlBTC, function (data) {

                let BTCData = data.map((element) => ({
                    name: element.Name, symbol: element.Symbol, date: element.Date.$date,
                    open: element.Open, high: element.High, low: element.Low, close: element.Close, volume: element.Volume, mktcap: element.Marketcap
                }))

                // create a data table
                let dataTable = anychart.data.table('date');
                dataTable.addData(BTCData);

                // map data
                let mapping = dataTable.mapAs({ 'open': 'open', 'high': 'high', 'low': 'low', 'close': 'close' });

                // set the chart type
                let chart = anychart.stock();

                // set the series
                let series = chart.plot(0).candlestick(mapping);
                series.name("Bitcoin Data");

                // set the chart title
                chart.title("Bitcoin Historical Price Data");

                // Add the EMA(9) technical indicator
                let plot = chart.plot(0);
                // create an EMA indicator with period 9
                let ema9 = plot.ema(mapping, 9).series();
                // set the EMA color
                ema9.stroke('#bf360c');

                // Add the EMA(30) technical indicator
                let plot2 = chart.plot(0);
                // create an EMA indicator with period 30
                let ema30 = plot.ema(mapping, 30).series();
                // set the EMA color
                ema30.stroke('#006400');

                // disable the scroller axis
                chart.scroller().xAxis(false);
                // map "open" values for the scroller
                openValue = dataTable.mapAs();
                openValue.addField('value', 'open');
                // create a scroller series with the mapped data
                chart.scroller().column(openValue);

                // set the container id
                chart.container('plot');

                // draw the chart
                chart.draw();

            });

        });


    }
    else if (dataset === 'dataset2') {

        anychart.onDocumentReady(function () {

            // load data
            anychart.data.loadJsonFile(urlETH, function (data) {

                let ETHData = data.map((element) => ({
                    name: element.Name, symbol: element.Symbol, date: element.Date.$date,
                    open: element.Open, high: element.High, low: element.Low, close: element.Close, volume: element.Volume, mktcap: element.Marketcap
                }))

                // create a data table
                let dataTable = anychart.data.table('date');
                dataTable.addData(ETHData);

                // map data
                let mapping = dataTable.mapAs({ 'open': 'open', 'high': 'high', 'low': 'low', 'close': 'close' });

                // set the chart type
                let chart = anychart.stock();

                // set the series
                let series = chart.plot(0).candlestick(mapping);
                series.name("Ethereum Data");

                // set the chart title
                chart.title("Ethereum Historical Price Data");

                // Add the EMA(9) technical indicator
                let plot = chart.plot(0);
                // create an EMA indicator with period 9
                let ema9 = plot.ema(mapping, 9).series();
                // set the EMA color
                ema9.stroke('#bf360c');

                // Add the EMA(30) technical indicator
                let plot2 = chart.plot(0);
                // create an EMA indicator with period 30
                let ema30 = plot.ema(mapping, 30).series();
                // set the EMA color
                ema30.stroke('#006400');

                // disable the scroller axis
                chart.scroller().xAxis(false);
                // map "open" values for the scroller
                openValue = dataTable.mapAs();
                openValue.addField('value', 'open');
                // create a scroller series with the mapped data
                chart.scroller().column(openValue);

                // set the container id
                chart.container('plot');

                // draw the chart
                chart.draw();

            });

        });
    }
    else if (dataset === 'dataset3') {

        anychart.onDocumentReady(function () {

            // load data
            anychart.data.loadJsonFile(urlLTC, function (data) {

                let LTCData = data.map((element) => ({
                    name: element.Name, symbol: element.Symbol, date: element.Date.$date,
                    open: element.Open, high: element.High, low: element.Low, close: element.Close, volume: element.Volume, mktcap: element.Marketcap
                }))

                // create a data table
                let dataTable = anychart.data.table('date');
                dataTable.addData(LTCData);

                // map data
                let mapping = dataTable.mapAs({ 'open': 'open', 'high': 'high', 'low': 'low', 'close': 'close' });

                // set the chart type
                let chart = anychart.stock();

                // set the series
                let series = chart.plot(0).candlestick(mapping);
                series.name("Litecoin Data");

                // set the chart title
                chart.title("Litecoin Historical Price Data");

                // Add the EMA(9) technical indicator
                let plot = chart.plot(0);
                // create an EMA indicator with period 9
                let ema9 = plot.ema(mapping, 9).series();
                // set the EMA color
                ema9.stroke('#bf360c');

                // Add the EMA(30) technical indicator
                let plot2 = chart.plot(0);
                // create an EMA indicator with period 30
                let ema30 = plot.ema(mapping, 30).series();
                // set the EMA color
                ema30.stroke('#006400');

                // disable the scroller axis
                chart.scroller().xAxis(false);
                // map "open" values for the scroller
                openValue = dataTable.mapAs();
                openValue.addField('value', 'open');
                // create a scroller series with the mapped data
                chart.scroller().column(openValue);

                // set the container id
                chart.container('plot');

                // draw the chart
                chart.draw();

            });

        });
    }
    else {
        console.log('no data selected');
    }
}

init();
