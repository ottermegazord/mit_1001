var cheerio = require('cheerio');

var data = '<h3>Title 1</h3>space<h3>Title 2</h3>space<h3>Title 3</h3>space<h3>Title 4</h3>';

// load data
var $ = cheerio.load(data);

// make selections in date
var matches = $('h3').text();
console.log(matches);

$('h3').each(function(i,element){
    matches.push($(element).text());
});

console.log(matches);