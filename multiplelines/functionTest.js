function getData(choice){
  
    if (choice == 'dollar' ) {
      scrapeData(choice);
    //   const dollarLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/dollar/';
    
    // d3.json(dollarLink).then((data, i) => {
    //   // Once we get a response, send the data.features object to the createFeatures function
    //   let closeDollar = data.map((values, i) => data[i].Close);
    //   let dateDollar = data.map((values, i) => (data[i].Date.$date)); 
    //   // console.log(closeDollar);
    //   graphData(closeDollar, dateDollar, "Dollar")
    // }); 
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

// Get data for second axis on the graph
// function getData2(choice){
//   if (choice == 'dollar' ) {
//     const dollarLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/dollar/';
  
//   d3.json(dollarLink).then((data, i) => {
//     // Once we get a response, send the data.features object to the createFeatures function
//     let closeDollar = data.map((values, i) => data[i].Close);
//     let dateDollar = data.map((values, i) => (data[i].Date.$date)); 
//     // console.log(closeDollar);
//     graph2Data(closeDollar, dateDollar, "Dollar");
//   }); 
//   }
//   else if (choice == 'gold'){
//   const goldLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com//api/gold/';
//   d3.json(goldLink).then((data, i) => {
//     // Once we get a response, send the data.features object to the createFeatures function
//     let closeGold = data.map((values, i) => data[i].Close);
//     let date = data.map((values, i) => (data[i].Date.$date)); 
//     // console.log(date);
//     graph2Data(closeGold, date, "Gold");
    
//   });
//   }
  
//   else if (choice == 'snp'){
//     const snpLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/snp500/';
//     d3.json(snpLink).then((data, i) => {
//       // Once we get a response, send the data.features object to the createFeatures function
//       let closeSnp = data.map((values, i) => data[i].Close);
//       let date = data.map((values, i) => (data[i].Date.$date));
//       // console.log(closeSnp);
//       graph2Data(closeSnp, date, "S&P 500");
//     });
//   }
  
//   else if (choice == 'vix'){
//     const vixLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/vix/';
//     d3.json(vixLink).then((data, i) => {
//       // Once we get a response, send the data.features object to the createFeatures function
//       let closeVix = data.map((values, i) => data[i].Close);
//       let date = data.map((values, i) => (data[i].Date.$date));
//       // console.log(closeVix);
//       graph2Data(closeVix, date, "VIX");
//     });
//   }
  
//   else if (choice == 'crypto'){
//     const cryptoLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/LTC';
//     d3.json(cryptoLink).then((data, i) => {
//       // Once we get a response, send the data.features object to the createFeatures function
//       let closeCrypto = data.map((values, i) => data[i].Close);
//       // console.log(closeCrypto);
//       graph2Data(closeCrypto);
//     });
//   }
  
//   else {
//     graph2Data("none")
//     console.log('no data selected')
//   }
//   };