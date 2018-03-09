var ShakeShack = require('./shake-shack');

/* Async with async/await */

async function haveLunch() {
  // TODO add Joe ordering a triple

  console.log('Al orders');
  var res1 = await ShakeShack.makeBurgerPromise('Al', 'cheese');
  console.log(res1.name + ' receives burger: ' + res1.burger);

  console.log('Sue orders');
  var res2 = await ShakeShack.makeBurgerPromise('Sue', 'veggie');
  console.log(res2.name + ' receives burger: ' + res2.burger);
}

haveLunch();
