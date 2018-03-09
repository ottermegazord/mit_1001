var fetch = require('node-fetch');  

var url = 'http://localhost:8080/hello.html';

fetch(url).then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log('Request successful', text);
  })
  .catch(function(error) {
    log('Request failed', error)
  });

console.log('last line');
