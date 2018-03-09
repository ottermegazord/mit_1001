var ShakeShack = require('./shake-shack');

/* Async with async/await part 3 */

async function haveLunch() {
  var lunches = [
    { name: 'Al', burger: 'cheese' },
    { name: 'Sue', burger: 'veggie' },
  ];

  var promises = lunches.map(function(lunch) {
    return order(lunch.name, lunch.burger);
  });
  var res = await Promise.all(promises);
}

async function order(name, burger) {
  console.log(name + ' orders');
  return ShakeShack.makeBurgerPromise(name, burger);
}

haveLunch();
