var fetch = require('node-fetch');  

var url = 'http://localhost:8080/hello.html';


fetch(url).then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log('Request successful', text);
  });
  
console.log('last line');
