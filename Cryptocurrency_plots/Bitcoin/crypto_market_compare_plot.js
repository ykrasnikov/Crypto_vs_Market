
anychart.onDocumentReady(function () {
    // load data
    let url = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/all_data/';
        anychart.data.loadJsonFile(url,function(data) {
            
            var bitcoinData = data.filter(function (el) {
                return el.Name === 'Bitcoin';
            });
            var goldData = data.filter(function (el) {
                return el.Name === 'Gold-Price-Linked Exchange';
            });
            var vixData = data.filter(function (el) {
                return el.Name === 'CBOE Volatility Index';
            });
            
            
            bitcoinData = bitcoinData.map((element)=>({name:element.Name, symbol:element.Symbol, date:element.Date.$date,  open: element.Open, high: element.High, low: element.Low, close: element.Close, volume: element.Volume, mktcap : element.Marketcap})); 
            goldData = goldData.map((element)=>({name:element.Name, symbol:element.Symbol, date:element.Date.$date,  open: element.Open, high: element.High, low: element.Low, close: element.Close, volume: element.Volume, mktcap : element.Marketcap})); 
            vixData = vixData.map((element)=>({name:element.Name, symbol:element.Symbol, date:element.Date.$date,  open: element.Open, high: element.High, low: element.Low, close: element.Close, volume: element.Volume, mktcap : element.Marketcap})); 
            
            console.log(bitcoinData);
            console.log(goldData);
            console.log(vixData);
        
            // create a data tables
        let bitcoinTable = anychart.data.table('date');
        bitcoinTable.addData(bitcoinData);

        let goldTable = anychart.data.table('date');
        goldTable.addData(goldData);

        let vixTable = anychart.data.table('date');
        vixTable.addData(vixData);
        
        // map data
        
        //  let mapping = dataTable.mapAs({ 'open': 'open', 'high': 'high', 'low': 'low', 'close': 'close','volume':'volume'});
        
        //create stock chart
        let chart = anychart.stock();

        // set the series
        
        // create first plot on the chart with column series
        var firstPlot = chart.plot(0);
        // create line series on the first plot
        firstPlot
            .line()
            .data(bitcoinTable.mapAs({ 'value':'close' }))
            .name('BTC');

        // create second plot on the chart
        var secondPlot = chart.plot(1);
        // create spline line series on the second plot
        secondPlot
            .spline()
            .data(goldTable.mapAs({ 'value':'close' }))
            .name('Gold')
            .fill('#1976d2 0.65')
            .stroke('1.5 #1976d2');

        // create third plot
        var thirdPlot = chart.plot(2);
        // create step line series on the third plot
        thirdPlot
            .stepLine()
            .data(vixTable.mapAs({ 'value':'close' }))
            .name('VIX')
            .fill('#ef6c00 0.65')
            .stroke('1.5 #ef6c00');

        // create forth plot
        var forthPlot = chart.plot(3);
        // create step line series on the forth plot
        forthPlot
            .line()
            .data(bitcoinTable.mapAs({ 'value':'close' }))
            .name('BTC')
            .tooltip(false);
        forthPlot
            .spline()
            .data(goldTable.mapAs({ 'value':'close' }))
            .name('Gold')
            .tooltip(false);
        forthPlot
            .stepLine()
            .data(vixTable.mapAs({ 'value':'close' }))
            .name('VIX')
            .tooltip(false);

        // create scroller series with mapped data
        chart.scroller().line(bitcoinTable.mapAs({ 'value':'close' }));

        // set chart selected date/time range
        chart.selectRange('2013-03-01', '2020-03-01');

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
    });
})