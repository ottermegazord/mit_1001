// synchronous, waits for each operation to finish
// asynchronous runs in background never wait

var shakeShack = require('./shake-shack.js');

// // Synchronous

// function lunch(){

//     // Joe's order
//     var order1 = shakeShack.makeBurgerSync('Joe', 'veggie');
//     console.log(order1.name + "'s order was " + order1.burger);

//     // Joe's order
//     var order2 = shakeShack.makeBurgerSync('James', 'cheese');
//     console.log(order2.name + "'s order was " + order2.burger);

// }

// // Asynchronous with callbacks

// function lunch() {

//     // Joe's order
//     shakeShack.makeBurgerCallback('Joe', 'veggie', function(order1){
//         console.log(order1.name + "'s order was " + order1.burger);
//     });

//     // Rick's order
//     shakeShack.makeBurgerCallback('Rick', 'cheese', function(order2){
//         console.log(order2.name + "'s order was " + order2.burger);
//     });
// };

// // Asynchronous with promise

// function lunch(){
//     // Joe's order
//     console.log('Joe orders');
//     shakeShack.makeBurgerPromise('Joe', 'cheese').then(function(order1){
//         console.log(order1.name + "'s order was " + order1.burger);
//     });

//      // Rick's order
//      console.log('Rick orders');
//      shakeShack.makeBurgerPromise('Rick', 'veggie').then(function(order2){
//         console.log(order2.name + "'s order was " + order2.burger);
//     });
// }

// Asynchronous with async/await => basically i'm using asynchronous functions and make it asynchronous

// async function lunch(){
    
//     console.log('Joe orders');
//     var order1 = await shakeShack.makeBurgerPromise('Joe', 'cheese');
//     console.log(order1.name + "'s order was " + order1.burger + " burger.");

//     console.log('Rick orders');
//     var order2 = await shakeShack.makeBurgerPromise('Rick', 'veggie');
//     console.log(order2.name + "'s order was " + order2.burger + " burger.");


// };

// Async with promise all

async function lunch(){
    var allOrders = await Promise.all([orderJoe(), orderRick()]); // has to be an array
    console.log(allOrders);
};

async function orderJoe(){
    console.log('Joe orders');
    return shakeShack.makeBurgerPromise('Joe', 'cheese');
}

async function orderRick(){
    console.log('Rick orders');
    return shakeShack.makeBurgerPromise('Rick', 'veggie');
}

lunch();