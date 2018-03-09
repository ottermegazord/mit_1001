
// // asynchronous i.e. 1,3,2
// synchronous 1,2,3
// setTimeout( ()=>saySomething("1 seconds passed"), 1000);
// console.log("hello world");


setTimeout( 
  function(){
    saySomething("1 seconds passed")
  }, 1000
);

function saySomething(result) {
  console.log(result);
}

const wait = function(ms){
    return new Promise(
      function(resolve){
        setTimeout(resolve,ms);
      }
    )};

wait(1000).then(function(){
  saySomething("we waited 1 second");
});

// const wait = ms => new Promise(resolve=>setTimeout(resolve,ms));
// wait(1000).then(    ()=>saySomething("we waited 1 seconds"));

console.log("hello at start");

