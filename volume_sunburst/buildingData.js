let gold = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/gold/"
let sNp = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/snp500/"
let bitcoin = "http://cryptocurrencyproject.us-east-2.elasticbeanstalk.com/api/crypto/BTC/01-01-2000,01-02-2050"
let ethereum = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/ETH/01-01-2020,01-02-2050"
let litecoin = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/LTC/01-01-2020,01-02-2050"

function convertTime(unixTime) {
    let dateObject=new Date(unixTime),
        date=dateObject.toLocaleString("en-US", {timeZoneName: "short"});
    return date;
    // let unix_timestamp = unixTime;
    // // Create a new JavaScript Date object based on the timestamp
    // // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    // var date = new Date(unix_timestamp * 1000);
    // // Hours part from the timestamp
    // var hours = date.getHours();
    // // Minutes part from the timestamp
    // var minutes = "0" + date.getMinutes();
    // // Seconds part from the timestamp
    // var seconds = "0" + date.getSeconds();

    // // Will display time in 10:30:23 format
    // var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    // console.log(formattedTime);
}

const volumeData = {
    name: "Volumes of crypto/traditional stocks", children:[
        {
            name:"Traditional Stocks", children:[
                {name:"S&P 500", value: 0},
                {name:"Gold", value: 0}
            ]
        },
        {
            name:"Cryptocurrencies", children:[
                {name:"Bitcoin", value:0},
                {name:"Ethereum", value:0},
                {name:"Litecoin", value:0}
            ]
        }
    ]
}


function buildVolumeData(stock,amount){
    if (stock == "BTC"){
        volumeData.children[1].children[0].value = amount;
    }
    else if (stock == "ETH"){
        volumeData.children[1].children[1].value = amount;
    }
    else if (stock == "LTC"){
        volumeData.children[1].children[2].value = amount;
    }
    else if (stock == "S&P"){
        volumeData.children[0].children[0].value = amount;
    }
    else if (stock == "GLD"){
        volumeData.children[0].children[1].value = amount;
    }
}

d3.json(gold).then(function(data){
    // console.log(data[data.length-1])
    // console.log("volume of gold: " + data[data.length-2].Volume)
    // console.log("date of query: " + convertTime(data[data.length -3].Date.$date))
    // data.forEach(d=>console.log(convertTime(d.Date.$date)))
    // console.log(data)
    buildVolumeData("GLD", data[data.length-1].Volume)
    //since market cap doesn't exist for gold it won't be used in the marketcap sunburst
})

d3.json(sNp).then(data=>{
    // console.log(data[data.length-1])
    // console.log("volume of S&P 500" + data[data.length -1].Volume)
    // console.log("date of query: " + convertTime(data[data.length -1].Date.$date))
    buildVolumeData("S&P", data[data.length -1].Volume)
    //market cap also doesn't exist for S&P 500, won't be used in marketcap sunburst
})

d3.json(bitcoin).then(data=>{
    // console.log(data[0])
    // console.log("volume of bitcoin: " + data[0].Volume)
    // data.forEach(d=>console.log(convertTime(d.Date.$date)))
    // console.log("marketcap of bitcoin: "+ data[0].Marketcap)
    // console.log("date of query: " + convertTime(data[data.length-2].Date.$date))
    buildVolumeData("BTC", data[0].Volume)
})

d3.json(ethereum).then(data=>{
    // console.log(data[0])
    // console.log("volume of ethereum: " + data[0].Volume)
    // console.log("marketcap of ethereum: "+ data[0].Marketcap)
    // console.log("date of query: " + convertTime(data[data.length -1].Date.$date))
    buildVolumeData("ETH", data[0].Volume)
})

d3.json(litecoin).then(data=>{
    // console.log(data[0])
    // console.log("volume of litecoin: " + data[0].Volume)
    // console.log("marketcap of litecoin: "+ data[0].Marketcap)
    // console.log("date of query: " + convertTime(data[data.length -1].Date.$date))
    buildVolumeData("LTC", data[0].Volume)
})
console.log(volumeData)