var ShakeShack = require('./shake-shack');

/* Async with async/await part 2 */

async function haveLunch() {
  var res = await Promise.all([orderAl(), orderSue(), orderJoe()]);
  console.log(res);
}

async function orderAl() {
  console.log('Al orders');
  return ShakeShack.makeBurgerPromise('Al', 'cheese');
}

async function orderSue() {
  console.log('Sue orders');
  return ShakeShack.makeBurgerPromise('Sue', 'veggie');
}

// TODO add Joe's order

async function orderJoe() {
  console.log('Joe orders');
  return ShakeShack.makeBurgerPromise('Joe', 'triple');
}

haveLunch();
