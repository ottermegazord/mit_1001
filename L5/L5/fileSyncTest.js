var fs = require('fs');

exercise.one = function(){
    var address = '/Users/idaly666/Desktop/onexi/hw-bubbles/ottermegazord/catalog/catalog.txt';
    var input = fs.readFileSync(address, 'utf8');

    console.log(input);
};
