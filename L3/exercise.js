var data = {
    first_name: 'cristiano',
    last_name: 'ronaldo',
    clubs : ['sporting' ,'manutd', 'real madrid'],
    position: { united: 'winger', real: 'striker'}

};


var university = {
    schools: {
        engineering: {
            departments: {
                course1: {
                    classes: {
                        engrComputation: '1.001'
                    }
                }
            }
        }
    }
};

var add = function(a,b){
    console.log('arguments[]:' + arguments[0]);
    return a+b;
};

var math = {add: null, subtract: null};

math.add = function(a, b){
    return a + b;
};

math.subtract = function(a, b){
    return a - b;
};

// var loader = function(f){
//     f();
// };
//
// //immediately load the function
// loader(function(){
//     console.log('Hello');
// });

var student = 'peter';

var myFunction = function(){
    var student = 'bruce';
    friend = 'robin'; // leaking
    console.log(student);
};

var increaseByFive = function(x){
    console.log('in function: ' + x);
    x += 5;
    console.log('in function: ' + x);
    return x;
};

var x = 0;

increaseByFive(x);

var city01 = {name: 'boston', state:'MA'};
var city02 = city01;
city02.country = 'USA';

var city = {
    name: 'boston',
    state: 'MA',
    governor:{
        name: 'Deval Patrick',
        party: 'Democrat'
    }
};

var name = city.name;
name = 'miami';

console.log('name: ' + name);
console.log('city.name: ' + city.name);

var governor = city.governor;
governor.party = 'Republican';

console.log('governer.party: ' + governor.party);
console.log('city.governor.party: ' +city.governor.party);