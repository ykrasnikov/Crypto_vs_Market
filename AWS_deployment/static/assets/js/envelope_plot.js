function init() {  
  let source = "Bitcoin";
      anychart.onDocumentReady(function () {
        // load data
        // 3 cryptos
          let mainURL="http://cryptocurrencyproject.us-east-2.elasticbeanstalk.com/",
            Bitcoin = mainURL+"api/crypto/BTC/04-29-2013,02-27-2021",
            Ethereum = mainURL+"api/crypto/ETH/08-08-2015,02-27-2021",
            Litecoin = mainURL+"api/crypto/LTC/04-29-2013,02-27-2021",
            Dollar = mainURL+"api/dollar/04-29-2013,02-27-2021",
            SnP500 = mainURL+"api/snp500/04-29-2013,02-27-2021",
            VIX = mainURL+"api/vix/04-29-2013,02-27-2021",
            Gold = mainURL+"api/gold/04-29-2013,02-27-2021",
            dataset = Bitcoin;
          
          //Define Chart and Plot Data
          anychart.data.loadJsonFile(dataset,function(data) {
                              
            filteredData = data.map((element)=>({name:element.Name, symbol:element.Symbol, date:element.Date.$date,  open: element.Open, high: element.High, low: element.Low, close: element.Close, volume: element.Volume, mktcap : element.Marketcap})) 
                  
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
              chart.plot().candlestick(mapping).name(source);

              // create envelope indicator
              chart.plot().env(mapping);

              // create scroller series
              chart.scroller().area(valueMapping);

              // set chart selected date/time range
              chart.selectRange('2020-03-31', '2021-03-31');

              // set container id for the chart
              chart.container('plot2');
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

                    function clearPlot(elementID)
                    {
                        document.getElementById(elementID).innerHTML = "";
                    }
                
                    // Call updatePlotly() when a change takes place to the DOM
                    d3.selectAll("#selDataset3").on("change", updatePlot);
                    
                      // Update plot
                      function updatePlot() {
                        
                        //Clear previous plot
                        clearPlot('plot2');
                        
                        // Use D3 to select the dropdown menu
                        let dropdownMenu = d3.select("#selDataset3");
                        
                        // Assign the value of the dropdown menu option to a variable
                        let source = dropdownMenu.property("value");
                        console.log(source)
                        if (source === "Bitcoin") {
                          dataset = Bitcoin}
                          else if (source === "Ethereum") {
                            dataset = Ethereum}
                            else if ( source === "Litecoin"){
                              dataset = Litecoin}
                              else if (source === "Dollar"){
                                dataset = Dollar}
                                else if (source === "Snp500"){
                                  dataset = SnP500}
                                  else if (source === "VIX"){
                                    dataset = VIX}
                                    else if (source === "Gold"){
                                      dataset = Gold}
                                      else{
                                        console.log("input missing")
                                      };
                        
                        
                          //Define Chart and Plot Data
                          anychart.data.loadJsonFile(dataset,function(data) {
                              
                            filteredData = data.map((element)=>({name:element.Name, symbol:element.Symbol, date:element.Date.$date,  open: element.Open, high: element.High, low: element.Low, close: element.Close, volume: element.Volume, mktcap : element.Marketcap})) 
                                  
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
                              chart.plot().candlestick(mapping).name(source);

                              // create envelope indicator
                              chart.plot().env(mapping);

                              // create scroller series
                              chart.scroller().area(valueMapping);

                              // set chart selected date/time range
                              chart.selectRange('2020-03-31', '2021-03-31');

                              // set container id for the chart
                              chart.container('plot2');
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
                          
                      
                          
                      };
 
      })
  
};
init();