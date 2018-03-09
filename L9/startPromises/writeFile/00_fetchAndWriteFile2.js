var fetch = require('node-fetch');
var fs = require('fs');
var url = 'http://localhost:8080/hello.html'

// here we wrap fs.writeFile to Promisfy it
const writeFile = (path, data) =>
    new Promise((response, reject) => {
        fs.writeFile(path, data, 'utf8', 
            (err) => {
            if (err) reject(err);
            else {;
                console.log('writing '+path);
                response();}
        });
});

var counter = 0;
// fetch already returns a Promise
// inclass rewrite this with fat arrows 
fetch(url).then(
    function(response) {
      response.text().then(function(data) {
        counter++;
        writeFile('data/' + counter + '.html', data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });