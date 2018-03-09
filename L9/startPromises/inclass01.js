// read this article on fetch https://developers.google.com/web/updates/2015/03/introduction-to-fetch
// fetch uses Promises. Can you rewrite this to use .then instead of await


var urls = [];
urls.push('http://student.mit.edu/catalog/m1a.html');
urls.push('http://student.mit.edu/catalog/m1b.html');
urls.push('http://student.mit.edu/catalog/m1c.html');
urls.push('http://student.mit.edu/catalog/m2a.html');
urls.push('http://student.mit.edu/catalog/m2b.html');
urls.push('http://student.mit.edu/catalog/m2c.html');
urls.push('http://student.mit.edu/catalog/m3a.html');
urls.push('http://student.mit.edu/catalog/m3b.html');
urls.push('http://student.mit.edu/catalog/m4a.html');
urls.push('http://student.mit.edu/catalog/m4b.html');
urls.push('http://student.mit.edu/catalog/m4c.html');
urls.push('http://student.mit.edu/catalog/m4d.html');
urls.push('http://student.mit.edu/catalog/m4e.html');
urls.push('http://student.mit.edu/catalog/m4f.html');
urls.push('http://student.mit.edu/catalog/m4g.html');
urls.push('http://student.mit.edu/catalog/m5a.html');
urls.push('http://student.mit.edu/catalog/m5b.html');
urls.push('http://student.mit.edu/catalog/m6a.html');
urls.push('http://student.mit.edu/catalog/m6b.html');
urls.push('http://student.mit.edu/catalog/m6c.html');
urls.push('http://student.mit.edu/catalog/m7a.html');
urls.push('http://student.mit.edu/catalog/m8a.html');
urls.push('http://student.mit.edu/catalog/m8b.html');
urls.push('http://student.mit.edu/catalog/m9a.html');
urls.push('http://student.mit.edu/catalog/m9b.html');
urls.push('http://student.mit.edu/catalog/m10a.html');
urls.push('http://student.mit.edu/catalog/m10b.html');
urls.push('http://student.mit.edu/catalog/m11a.html');
urls.push('http://student.mit.edu/catalog/m11b.html');
urls.push('http://student.mit.edu/catalog/m11c.html');
urls.push('http://student.mit.edu/catalog/m12a.html');
urls.push('http://student.mit.edu/catalog/m12b.html');
urls.push('http://student.mit.edu/catalog/m12c.html');
urls.push('http://student.mit.edu/catalog/m14a.html');
urls.push('http://student.mit.edu/catalog/m14b.html');
urls.push('http://student.mit.edu/catalog/m15a.html');
urls.push('http://student.mit.edu/catalog/m15b.html');
urls.push('http://student.mit.edu/catalog/m15c.html');
urls.push('http://student.mit.edu/catalog/m16a.html');
urls.push('http://student.mit.edu/catalog/m16b.html');
urls.push('http://student.mit.edu/catalog/m18a.html');
urls.push('http://student.mit.edu/catalog/m18b.html');
urls.push('http://student.mit.edu/catalog/m20a.html');
urls.push('http://student.mit.edu/catalog/m22a.html');
urls.push('http://student.mit.edu/catalog/m22b.html');
urls.push('http://student.mit.edu/catalog/m22c.html');

var fetch = require('node-fetch');
var fs = require('fs');

const writeFile = (path, data, opts = 'utf8') =>
    new Promise((resolve, reject) => {
        fs.writeFile(path, data, opts, (err) => {
            if (err) reject(err)
            else resolve()
    })
})

var makeRequest = async function (url,counter) {
    var result = await fetch(url);
    await writeFile('data/' + counter + '.html', await result.text());
    return 'done - ' + counter;        
};  

urls.forEach(function(url,i){
    makeRequest(url,i).then((result) =>{
        console.log(result);
    });    
})        
