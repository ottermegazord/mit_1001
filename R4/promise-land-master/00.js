var ShakeShack = require('./shake-shack');

/* Synchronous */

function haveLunch() {
  console.log('Al orders');
  var res1 = ShakeShack.makeBurgerSync('Al', 'cheese');
  console.log(res1.name + ' receives burger: ' + res1.burger);

  console.log('Sue orders');
  var res2 = ShakeShack.makeBurgerSync('Sue', 'cheese');
  console.log(res1.name + ' receives burger: ' + res1.burger);
}

haveLunch();
