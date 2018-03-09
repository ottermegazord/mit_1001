// new pattern we don't pass callbacks into function
// we return a Promise and call then


function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}
// function doSomething(){
// 	return new Promise( (success, failure)=>{
// 		var test = Math.round(Math.random()*10);
// 		if(test < 5)failure(test);
// 		if(test > 5)success(test);
// 	});
// }

function doSomething(){
	return new Promise(function (success, failure){
		var test = Math.round(Math.random()*10);
		if(test < 5)failure(test);
		if(test > 5)success(test);
	});
}

var promise1 = doSomething(); // receives doSomething from promise1
promise1.then(successCallback,failureCallback); // "then" implies that the above has to be fulfilled first
