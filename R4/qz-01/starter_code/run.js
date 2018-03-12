var exercise = require('./exercise.js');

// ----------------------------------------
//   QUESTION 01
//   Return a string that says "Hello!"
// ----------------------------------------
var response = exercise.hello();
console.log(response);

// ----------------------------------------
//   QUESTION 02
//   Return an array of numbers
// ----------------------------------------
var response = exercise.numberArray();
console.log(response);

// ----------------------------------------
//   QUESTION 03
//   Return an object with
//   a 'name' and 'age' property
// ----------------------------------------
var response = exercise.nameAndAge();
console.log(response);

// ----------------------------------------
//   QUESTION 04
//   Return an array of empty objects.
//   The array can have any length you like.
// ----------------------------------------
var response = exercise.objectArray();
console.log(response);

// ----------------------------------------
//   QUESTION 05
//   Add the property 'name' to someObject.
//   Give 'name' any value you like.
// ----------------------------------------
var obj = {};
var response = exercise.addProperty(obj);
console.log(response);

// ----------------------------------------
//   QUESTION 06
//   Return the third element of array
// ----------------------------------------
var myArray = ['ana',18,'pong',29,'sport'];
var response = exercise.thirdElement(myArray);
console.log(response);

// ----------------------------------------
//   QUESTION 07
//   Return the concatenation of
//   string1, string2, string3
// ----------------------------------------
var string1 = '01';
var string2 = '02';
var string3 = '03';
var response = exercise.concatenate(string1,string2,string3);
console.log(response);

// ----------------------------------------
//   QUESTION 08
//   Filter array for values greater than 6
//   Return the filtered array
// ----------------------------------------
var myArray = [-10,5,0,-2,10,7,3,9,6];
var response = exercise.greaterThanSix(myArray);
console.log(response);

// ----------------------------------------
//   QUESTION 09
//   Return a new array with
//   the "name" property values.
//
//   Example, for the data below,
//	 you should return
//     ['peter','bruce','clark','diana']
// ----------------------------------------
var people = [
		{name:'peter', age:18},
		{name:'bruce', age:22},
		{name:'clark', age:25},
		{name:'diana', age:29}
	];
var response = exercise.getNames(people);
console.log(response);

// ----------------------------------------
//   QUESTION 10
//   Return the sum of all the
//   salaries in array.
//
//   Example, for the data below,
//	 you should return
//     10000
// ----------------------------------------
var people = [
		{name:'peter', salary:1000},
		{name:'bruce', salary:2000},
		{name:'clark', salary:3000},
		{name:'diana', salary:4000}
	];
var response = exercise.getSalaryTotal(people);
console.log(response);

// ----------------------------------------
//   QUESTION 11
//   Sort numbers in array,
//   return the sorted array.
//   Ascending or descenging.
// ----------------------------------------
var myArray = [-10,5,0,-2,10,7,3,9,6];
var response = exercise.sortNumbers(myArray);
console.log(response);

// ----------------------------------------
//   QUESTION 12
//   Execute callback
// ----------------------------------------
var greeting;
var callback = function(){greeting = 'Hello!';};
var response = exercise.executeCallback(callback);
if (greeting) console.log(greeting);
if (response) console.log(response);

// ----------------------------------------
//   DATA FOR QUESTIONS 13-to-16
// ----------------------------------------
var payroll = [
 [1, 'abby hall', 'city manager ', '98538', '02132'],
 [2, 'dana bell', 'police chief ', '83942', '02136'],
 [3, 'cora cook', 'city attorney', '98538', '02132'],
 [4, 'judy king', 'fire director', '70073', '02090']
];

// ----------------------------------------
//   QUESTION 13
//   Return an array of people and jobs
//  [['person', 'job'], ['person,job'];
// ----------------------------------------
var response = exercise.getPersonAndJob(payroll);
console.log(response);

// ----------------------------------------
//   QUESTION 14
//   Return the total payroll as a number
// ----------------------------------------
var response = exercise.getTotalPayroll(payroll);
console.log(response);

// ----------------------------------------
//   QUESTION 15
//   Return the number of people with
//   earnings above target
// ----------------------------------------
var target = 84000;
var response = exercise.getEarningsAbove(payroll,target);
console.log(response);

// ----------------------------------------
//   QUESTION 16
//   Return the number of zip codes
//   with 'num' anywhere in them
// ----------------------------------------
var num = '3';
var response = exercise.getNumberOfZipCodesWith(payroll,num);
console.log(response);

