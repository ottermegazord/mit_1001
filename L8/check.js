var p = new Promise(function(resolve, reject){
    resolve('message 01');
});

p.then(function(msg){
    console.log(msg);
    return 'message 02;'
})
    .then(function(msg){
    console.log(msg);
    return 'message 03;'
})
    .then(function(msg) {
        console.log(msg);
    }, function(error){
        console.log('failed' + error);
});

