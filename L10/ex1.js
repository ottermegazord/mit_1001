
var student = {
    firstName: 'peter',
    lastName: 'parker',
    email: 'peter@mit.edu'
};

student.age = '18';

function greeting(){
    console.log("eh");
    return "hey!";
};

student.func = greeting();

console.log(student.func);



var student1 = {

    exams: [25, 55, 75, 99],
    gpa: {
        s2013: 1.5,
        f2013: 4.5
    },
    sport: [
        {basketball : { position : 'guard'}},
        {soccer : { position : 'mid'}},
        {football : { position : 'QB'}}
    ]

};

console.log(student1);