var exercise = require('./exercise.js');

var response;

response = exercise.one(2, 3);
console.log(response);

response = exercise.two([9, 3, 4]);
console.log(response);

response = exercise.three('apple');
console.log(response);

response = exercise.four([2, 4, 6]);
console.log(response);

response = exercise.five({'first_name': 'John', 'last_name': 'Doe'});
console.log(response);

response = exercise.six([1, 4, 6, 9]);
console.log(response);

response = exercise.seven(4);
console.log(response);

response = exercise.eight('1234');
console.log(response);

response = exercise.nine(function() {return 5;});
console.log(response);

response = exercise.ten();
console.log(response(2, 3));