urlBTC = "http://cryptocurrencyproject.us-east-2.elasticbeanstalk.com/api/crypto/BTC/04-29-2013,02-27-2021"
d3.json(urlBTC).then(data => {
    console.log(data)
});


anychart.onDocumentReady(function () {

    // load data
    anychart.data.loadJsonFile(urlBTC, function (data) {

        let BTCData = data.map((element) => ({ name: element.Name, symbol: element.Symbol, date: element.Date.$date, 
            open: element.Open, high: element.High, low: element.Low, close: element.Close, volume: element.Volume, mktcap: element.Marketcap }))

        // create a data table
        let dataTable = anychart.data.table('date');
        dataTable.addData(BTCData);

        // map data
        let mapping = dataTable.mapAs({ 'open': 'open', 'high': 'high', 'low': 'low', 'close': 'close'});

        // set the chart type
        let chart = anychart.stock();

        // set the series
        let series = chart.plot(0).candlestick(mapping);
        series.name("Bitcoin Data");

        // set the chart title
        chart.title("Bitcoin Historical Price Data");

        // Add the EMA technical indicator
        let plot = chart.plot(0);
        // create an EMA indicator with period 20
        let ema20 = plot.ema(mapping, 20).series();
        // set the EMA color
        ema20.stroke('#bf360c');

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