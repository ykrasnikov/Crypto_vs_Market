
d3.json('http://cryptocurrencyproject.us-east-2.elasticbeanstalk.com/api/').then(response=>{
    console.log(response)
    d3.select("#table")
    .selectAll("tr")
    .data(response)
    .enter()
    .append("tr")
    .html(function(d) {
        console.log(d)
        return `<td>${d.text}</td><td>${d.link}</td>`;
});
})