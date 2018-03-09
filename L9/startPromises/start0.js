
// callback pattern we know already

function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}
function doSomething(successCallback,failureCallback){
	var test = Math.round(Math.random()*10);
	if(test > 5)successCallback(test);
	if(test < 5)failureCallback(test);
}

doSomething(successCallback, failureCallback);