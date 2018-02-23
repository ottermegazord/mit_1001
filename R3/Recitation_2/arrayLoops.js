// Array of Numbers
var numbers = [10,3,5,4,2,6,15,8,13,1,11,12,9,14,7];
// Array of Strings
var names = [ 'Bruce', 'Li', 'Carla','Aziz', 'Deepal'];
// Array of Objects
var people = [{name: 'Aziz',position: 'Student',kerberos: 'amoh', id:1345},{name: 'Priyanka',position: 'Student',kerberos: 'pchop', id:3589},{name: 'Sam',position: 'Student',kerberos: 'sjr', id:4855},{name: 'Jessica',position: 'Teaching Assistant',kerberos: 'jtay', id:668},{name: 'John',position: 'Instructor',kerberos: 'jrw', id:58}];

//////------ For -----////  

console.log("People: " + people);
// For each number, double its value

var double_numbers = [];

for (var j = 0; j < numbers.length; j++){
    double_numbers.push(2*numbers[j]);
}

console.log(double_numbers);

// For each first name, add the last name

for (var i = 0; i < people.length; i++){
    people[i].name += ' '+ names[i];
}

console.log(people[1].name);


// For each person, create and add their email

for (var b = 0; b < people.length; b++){
    people[b].email = people[b].kerberos + '@mit.edu';
}

console.log(people[0].email);


//////------ Filter -----////  

// Filter out any number less than 10

var filtered10 = [];

for (var a = 0; a < numbers.length; a++){
    if(numbers[a] < 10){
        filtered10.push(numbers[a]);
    }
}

console.log(filtered10);

// Filter out any name whose name starts with 'A' or 'B'

function startAB(element) { //item, counter, array
    var comparison = element.name[0] == 'A' || element.name[0] == 'B' ;
    return comparison;
}
var filtered = people.filter(startAB);
console.log(filtered);

// Filter out just the students

function filterStudent(element) { //item, counter, array
    var comparison = element.position = 'Student' ;
    return comparison;
}
var filteredStudent = people.filter(filterStudent);
console.log(filteredStudent);

//////------ Sort -----////  

// Sort numbers in acending order

var sortedNumbers = [];

sortedNumbers = numbers.sort(function(a, b){return a-b});
console.log("Sorted Numbers: " + sortedNumbers);

// Sort names into alphabetical order

function copy(a){
    return a;
}

var people1 = people.map(copy);

function compare(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    if (a.name === b.name) return 0;
}

var sortedPeople = people1.sort(compare);

console.log(sortedPeople);

// Sort people by ID

var people2 = people.map(copy);

function compareID(a, b) {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    if (a.id === b.id) return 0;
}

var sortedID = people2.sort(compareID);
console.log(sortedID);
