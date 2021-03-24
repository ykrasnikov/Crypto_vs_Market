anychart.onDocumentReady(function () {

    // load data
    anychart.data.loadCsvFile("coin_Ethereum.csv", function (data) {

        // create a data table
        let dataTable = anychart.data.table(3);
        dataTable.addData(data);

        // map data
        let mapping = dataTable.mapAs({ 'open': 6, 'high': 4, 'low': 5, 'close': 7 });

        // set the chart type
        let chart = anychart.stock();

        // set the series
        let series = chart.plot(0).candlestick(mapping);
        series.name("Ethereum Data");

        // set the chart title
        chart.title("Ethereum Historical Price Data");

        // set the container id
        chart.container('container');

        // draw the chart
        chart.draw();

    });

});