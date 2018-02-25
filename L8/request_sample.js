var request = require('request');

function callback(error, response, body) {
    if (!error){
        console.log(body);
    }
    else{
        console.log(error);
    }
}

request('http://www.mit.edu/index.html', callback);