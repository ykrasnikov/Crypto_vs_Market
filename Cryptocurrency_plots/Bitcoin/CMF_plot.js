
   
anychart.onDocumentReady(function () {
    // load data
    let url = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/all_data/';
         anychart.data.loadJsonFile(url,function(data) {
            
            var filteredData = data.filter(function (el) {
                return el.Name === 'Bitcoin';
            });
            
            filteredData = filteredData.map((element)=>({name:element.Name, symbol:element.Symbol, date:element.Date.$date,  open: element.Open, high: element.High, low: element.Low, close: element.Close, volume: element.Volume, mktcap : element.Marketcap})) 
            
            console.log(filteredData)
            
        // create a data table
        let dataTable = anychart.data.table('date');
        dataTable.addData(filteredData);
        
        // map data
        
        let mapping = dataTable.mapAs({ 'open': 'open', 'high': 'high', 'low': 'low', 'close': 'close','volume':'volume'});
        
        //create stock chart
        let chart = anychart.stock();

        // set the series
        
        let series = chart.plot(0).ohlc(mapping);
        // series.ohlc(mapping);
        series.name("Bitcoin Data");

        var indicatorPlot = chart.plot(1);
        indicatorPlot.height('30%');

        // Creates Chaikin Money Flow indicator.
        indicatorPlot.cmf(mapping, 25, 'line');


        // set the chart title
        chart.title("Bitcoin Chaikin Money flow Indicator");

        // set the container id
        chart.container('container');

        // draw the chart
        chart.draw();

    });

});