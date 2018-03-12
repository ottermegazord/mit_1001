// var ShakeShack = require('./shake-shack');

// /* Async with Callbacks */

// function haveLunch() {

//     //joe orders triple burger
//     console.log("joe order");
//     ShakeShack.makeBurgerCallback('joe', 'triple', function(res) {
//         console.log(res.name + ' receives burger: ' + res.burger);
//     });

//     // Al order's his cheese burger
//     console.log('Al orders');
//     ShakeShack.makeBurgerCallback('Al', 'cheese', function(res) {
//         console.log(res.name + ' receives burger: ' + res.burger);
//     });

//     // Sue order's her cheese burger
//     console.log('Sue orders');
//     ShakeShack.makeBurgerCallback('Sue', 'veggie', function(res) {
//         console.log(res.name + ' receives burger: ' + res.burger);
//     });
// }

// haveLunch();

var ShakeShack = require('./shake-shack');

/* Async with Callbacks */

function haveLunch() {
  // Al order's his cheese burger
  console.log('Al orders');
  ShakeShack.makeBurgerCallback('Al', 'cheese', function(res) {
    console.log(res.name + ' receives burger: ' + res.burger);
  });

  // Sue order's her cheese burger
  console.log('Sue orders');
  ShakeShack.makeBurgerCallback('Sue', 'veggie', function(res) {
    console.log(res.name + ' receives burger: ' + res.burger);
  });
}

haveLunch();

