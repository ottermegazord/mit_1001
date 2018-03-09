function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}
function getNumber(){
  test = Math.round(Math.random()*10);
}

function doSomething1(){
	return new Promise( (success, failure)=>{
		// do something async here 
		setTimeout(function(){
			var test = Math.random()*10;
			if(test > 5) success(test);
			if(test < 5) failure(test);
		},1000);
	});
}
function doSomething2(){
	return new Promise( (success, failure)=>{
		// do something async here 
		setTimeout(function(){
			var test = Math.round(Math.random()*10);
			if(test > 5) success(test);
			if(test < 5) failure(test);
		},2000);
	});
}

var promise1 = doSomething1();
var promise2 = doSomething2();
promise1.then(successCallback,failureCallback).then(
promise2.then(successCallback,failureCallback));
console.log("last Line of Code");
