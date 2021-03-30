
   
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
        
        // map data for candlestick series
        let mapping = dataTable.mapAs({ 'open': 'open', 'high': 'high', 'low': 'low', 'close': 'close'});
        
        // map data for scrooler  series
        let valueMapping = dataTable.mapAs({'volume': 'volume'});

        //create stock chart
        let chart = anychart.stock();

        // create candlestick series
        chart.plot().candlestick(mapping).name('Bitcoin');

        // create envelope indicator
        chart.plot().env(mapping);

        // create scroller series
        chart.scroller().area(valueMapping);

        // set chart selected date/time range
        chart.selectRange('2021-01-01', '2021-03-31');

        // set container id for the chart
        chart.container('container');
        // initiate chart drawing
        chart.draw();

        // create range picker
        var rangePicker = anychart.ui.rangePicker();
        // init range picker
        rangePicker.render(chart);

        // create range selector
        var rangeSelector = anychart.ui.rangeSelector();
        // init range selector
        rangeSelector.render(chart);
      }
    );
  });

