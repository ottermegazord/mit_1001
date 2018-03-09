function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

function doSomething(){
	return new Promise( (success, failure)=>{
		// do something async here 
		setTimeout(function(){
			var test = Math.random()*10;
			if(test > 5) success(test);
			if(test < 5) failure(test);
		},1000);
	});
}


var promise1 = doSomething();
var promise2 = doSomething();
promise1.then(successCallback,failureCallback);
promise2.then(successCallback,failureCallback);
console.log("last Line of Code");
