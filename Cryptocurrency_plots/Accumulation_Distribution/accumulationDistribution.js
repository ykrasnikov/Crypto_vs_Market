console.log("I'm here!")
let sNp = "http://cryptocurrencyproject.us-east-2.elasticbeanstalk.com/api/snp500/02-01-2000,02-11-2050"
let gold = "http://cryptocurrencyproject.us-east-2.elasticbeanstalk.com/api/gold/02-01-2000,02-11-2050"
let bitcoin = "http://cryptocurrencyproject.us-east-2.elasticbeanstalk.com/api/crypto/BTC/02-01-2000,02-11-2050"
let litecoin = "http://cryptocurrencyproject.us-east-2.elasticbeanstalk.com/api/crypto/LTC/02-01-2000,02-11-2050"
let ethereum = "http://cryptocurrencyproject.us-east-2.elasticbeanstalk.com/api/crypto/ETH/02-01-2000,02-11-2050"





anychart.onDocumentReady(function () {
    //loading data from api
    anychart.data.loadJsonFile(litecoin,
      function (data) {
        //mapping data
        let stockData = data.map(d=>({
            name: d.Name, symbol: d.Symbol, date: d.Date.$date, open: d.Open,
            high: d.High, low: d.Low, close: d.Close, volume:d.Volume, mktcap: d.Marketcap
        }))
        console.log(stockData)

        // create data table on loaded data
        var dataTable = anychart.data.table('date');
        dataTable.addData(stockData);

        // map loaded data
        var mapping = dataTable.mapAs({
          open: 'open',
          high: 'high',
          low: 'low',
          close: 'close',
          volume: 'volume',
          value: 'close'
        });

        // create stock chart
        var chart = anychart.stock();
        // setting chart padding to fit both Y axes
        chart.padding(30, 100, 30, 100);

        // create plot on the chart
        var plot = chart.plot(0);
        // adding extra Y axis to the right side
        plot.yAxis(1).orientation('right');
        // create line series
        plot.ohlc().data(mapping).name('CSCO');

        var indicatorPlot = chart.plot(1);
        // set plot height
        indicatorPlot.height('30%');
        // create ADL indicator
        indicatorPlot.adl(mapping);
        // adding extra Y axis to the right side
        indicatorPlot.yAxis(1).orientation('right');

        // create scroller series with mapped data
        chart.scroller().line(mapping);

        // set chart selected date/time range
        chart.selectRange('2016-10-02', '2021-02-28');
        // set container id for the chart
        chart.container('plot4');
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
});

d3.selectAll('#datasetSelection').on("change", updateChart);

function clearChart(element){
    document.getElementById(element).innerHTML = "";
}

function updateChart(){
    let dropdownMenu = d3.select('#datasetSelection');
    let dataset = dropdownMenu.property('value');
    if (dataset == "ethereum"){
        clearChart("plot4")
        anychart.onDocumentReady(function () {
            //loading data from api
            anychart.data.loadJsonFile(ethereum,
              function (data) {
                //mapping data
                let stockData = data.map(d=>({
                    name: d.Name, symbol: d.Symbol, date: d.Date.$date, open: d.Open,
                    high: d.High, low: d.Low, close: d.Close, volume:d.Volume, mktcap: d.Marketcap
                }))
                console.log(stockData)
        
                // create data table on loaded data
                var dataTable = anychart.data.table('date');
                dataTable.addData(stockData);
        
                // map loaded data
                var mapping = dataTable.mapAs({
                  open: 'open',
                  high: 'high',
                  low: 'low',
                  close: 'close',
                  volume: 'volume',
                  value: 'close'
                });
        
                // create stock chart
                var chart = anychart.stock();
                // setting chart padding to fit both Y axes
                chart.padding(30, 100, 30, 100);
        
                // create plot on the chart
                var plot = chart.plot(0);
                // adding extra Y axis to the right side
                plot.yAxis(1).orientation('right');
                // create line series
                plot.ohlc().data(mapping).name('CSCO');
        
                var indicatorPlot = chart.plot(1);
                // set plot height
                indicatorPlot.height('30%');
                // create ADL indicator
                indicatorPlot.adl(mapping);
                // adding extra Y axis to the right side
                indicatorPlot.yAxis(1).orientation('right');
        
                // create scroller series with mapped data
                chart.scroller().line(mapping);
        
                // set chart selected date/time range
                chart.selectRange('2016-10-02', '2021-02-28');
                // set container id for the chart
                chart.container('plot4');
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
        });
    }
    else if (dataset == "litecoin"){
        clearChart('plot4')
        anychart.onDocumentReady(function () {
            //loading data from api
            anychart.data.loadJsonFile(litecoin,
              function (data) {
                //mapping data
                let stockData = data.map(d=>({
                    name: d.Name, symbol: d.Symbol, date: d.Date.$date, open: d.Open,
                    high: d.High, low: d.Low, close: d.Close, volume:d.Volume, mktcap: d.Marketcap
                }))
                console.log(stockData)
        
                // create data table on loaded data
                var dataTable = anychart.data.table('date');
                dataTable.addData(stockData);
        
                // map loaded data
                var mapping = dataTable.mapAs({
                  open: 'open',
                  high: 'high',
                  low: 'low',
                  close: 'close',
                  volume: 'volume',
                  value: 'close'
                });
        
                // create stock chart
                var chart = anychart.stock();
                // setting chart padding to fit both Y axes
                chart.padding(30, 100, 30, 100);
        
                // create plot on the chart
                var plot = chart.plot(0);
                // adding extra Y axis to the right side
                plot.yAxis(1).orientation('right');
                // create line series
                plot.ohlc().data(mapping).name('CSCO');
        
                var indicatorPlot = chart.plot(1);
                // set plot height
                indicatorPlot.height('30%');
                // create ADL indicator
                indicatorPlot.adl(mapping);
                // adding extra Y axis to the right side
                indicatorPlot.yAxis(1).orientation('right');
        
                // create scroller series with mapped data
                chart.scroller().line(mapping);
        
                // set chart selected date/time range
                chart.selectRange('2016-10-02', '2021-02-28');
                // set container id for the chart
                chart.container('plot4');
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
        });
    }
    else if (dataset == "bitcoin"){
        clearChart('plot4')
        anychart.onDocumentReady(function () {
            //loading data from api
            anychart.data.loadJsonFile(bitcoin,
              function (data) {
                //mapping data
                let stockData = data.map(d=>({
                    name: d.Name, symbol: d.Symbol, date: d.Date.$date, open: d.Open,
                    high: d.High, low: d.Low, close: d.Close, volume:d.Volume, mktcap: d.Marketcap
                }))
                console.log(stockData)
        
                // create data table on loaded data
                var dataTable = anychart.data.table('date');
                dataTable.addData(stockData);
        
                // map loaded data
                var mapping = dataTable.mapAs({
                  open: 'open',
                  high: 'high',
                  low: 'low',
                  close: 'close',
                  volume: 'volume',
                  value: 'close'
                });
        
                // create stock chart
                var chart = anychart.stock();
                // setting chart padding to fit both Y axes
                chart.padding(30, 100, 30, 100);
        
                // create plot on the chart
                var plot = chart.plot(0);
                // adding extra Y axis to the right side
                plot.yAxis(1).orientation('right');
                // create line series
                plot.ohlc().data(mapping).name('CSCO');
        
                var indicatorPlot = chart.plot(1);
                // set plot height
                indicatorPlot.height('30%');
                // create ADL indicator
                indicatorPlot.adl(mapping);
                // adding extra Y axis to the right side
                indicatorPlot.yAxis(1).orientation('right');
        
                // create scroller series with mapped data
                chart.scroller().line(mapping);
        
                // set chart selected date/time range
                chart.selectRange('2016-10-02', '2021-02-28');
                // set container id for the chart
                chart.container('plot4');
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
        });
    }
    else if (dataset == "sNp"){
        clearChart('plot4')
        anychart.onDocumentReady(function () {
            //loading data from api
            anychart.data.loadJsonFile(sNp,
              function (data) {
                //mapping data
                let stockData = data.map(d=>({
                    name: d.Name, symbol: d.Symbol, date: d.Date.$date, open: d.Open,
                    high: d.High, low: d.Low, close: d.Close, volume:d.Volume, mktcap: d.Marketcap
                }))
                console.log(stockData)
        
                // create data table on loaded data
                var dataTable = anychart.data.table('date');
                dataTable.addData(stockData);
        
                // map loaded data
                var mapping = dataTable.mapAs({
                  open: 'open',
                  high: 'high',
                  low: 'low',
                  close: 'close',
                  volume: 'volume',
                  value: 'close'
                });
        
                // create stock chart
                var chart = anychart.stock();
                // setting chart padding to fit both Y axes
                chart.padding(30, 100, 30, 100);
        
                // create plot on the chart
                var plot = chart.plot(0);
                // adding extra Y axis to the right side
                plot.yAxis(1).orientation('right');
                // create line series
                plot.ohlc().data(mapping).name('CSCO');
        
                var indicatorPlot = chart.plot(1);
                // set plot height
                indicatorPlot.height('30%');
                // create ADL indicator
                indicatorPlot.adl(mapping);
                // adding extra Y axis to the right side
                indicatorPlot.yAxis(1).orientation('right');
        
                // create scroller series with mapped data
                chart.scroller().line(mapping);
        
                // set chart selected date/time range
                chart.selectRange('2016-10-02', '2021-02-28');
                // set container id for the chart
                chart.container('plot4');
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
        });
    }
    else if (dataset == "gold"){
        clearChart('plot4')
        anychart.onDocumentReady(function () {
            //loading data from api
            anychart.data.loadJsonFile(litecoin,
              function (data) {
                //mapping data
                let stockData = data.map(d=>({
                    name: d.Name, symbol: d.Symbol, date: d.Date.$date, open: d.Open,
                    high: d.High, low: d.Low, close: d.Close, volume:d.Volume, mktcap: d.Marketcap
                }))
                console.log(stockData)
        
                // create data table on loaded data
                var dataTable = anychart.data.table('date');
                dataTable.addData(stockData);
        
                // map loaded data
                var mapping = dataTable.mapAs({
                  open: 'open',
                  high: 'high',
                  low: 'low',
                  close: 'close',
                  volume: 'volume',
                  value: 'close'
                });
        
                // create stock chart
                var chart = anychart.stock();
                // setting chart padding to fit both Y axes
                chart.padding(30, 100, 30, 100);
        
                // create plot on the chart
                var plot = chart.plot(0);
                // adding extra Y axis to the right side
                plot.yAxis(1).orientation('right');
                // create line series
                plot.ohlc().data(mapping).name('CSCO');
        
                var indicatorPlot = chart.plot(1);
                // set plot height
                indicatorPlot.height('30%');
                // create ADL indicator
                indicatorPlot.adl(mapping);
                // adding extra Y axis to the right side
                indicatorPlot.yAxis(1).orientation('right');
        
                // create scroller series with mapped data
                chart.scroller().line(mapping);
        
                // set chart selected date/time range
                chart.selectRange('2016-10-02', '2021-02-28');
                // set container id for the chart
                chart.container('plot4');
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
        });
    }
}