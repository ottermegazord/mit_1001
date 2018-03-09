var ShakeShack = require('./shake-shack');

/* Async with Promises */

function haveLunch() {
  // TODO add Joe ordering a tripple

  // Al order's his cheese burger
  console.log('Al orders');
  ShakeShack.makeBurgerPromise('Al', 'cheese').then(function(res) {
    console.log(res.name + ' receives burger: ' + res.burger);
  });

  // Sue order's her cheese burger
  console.log('Sue orders');
  ShakeShack.makeBurgerPromise('Sue', 'veggie').then(function(res) {
    console.log(res.name + ' receives burger: ' + res.burger);
  });
}

//console.log('Al orders');
//ShakeShack.makeBurgerPromise('Al', 'cheese')
//.then(res => {
//console.log(res.name + ' receives burger: ' + res.burger);
//// Al is still hungry
//console.log('Al orders seconds');
//return ShakeShack.makeBurgerPromise('Al', 'cheese');
//})
//.then(res => {
//console.log(res.name + ' receives burger: ' + res.burger);
//});

haveLunch();
