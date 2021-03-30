function init() {  
  let source = "Bitcoin";
      anychart.onDocumentReady(function () {
        // load data
        // 3 cryptos
          let Bitcoin = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/BTC/04-29-2013,02-27-2021";
          let Ethereum = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/ETH/08-08-2015,02-27-2021";
          let Litecoin = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/LTC/04-29-2013,02-27-2021";
          let Dollar = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/dollar/";
          let SnP500 = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/snp500/";
          let VIX = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/vix/";
          let Gold = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/gold/";
          let dataset = Bitcoin;
          
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
              chart.container('plot');
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
                    d3.selectAll("#selDataset").on("change", updatePlot);
                    
                      // Update plot
                      function updatePlot() {
                        
                        //Clear previous plot
                        clearPlot('plot');
                        
                        // Use D3 to select the dropdown menu
                        let dropdownMenu = d3.select("#selDataset");
                        
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
                              chart.container('plot');
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