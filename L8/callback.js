
var employees = [ // aray
    {names: 'peter', salary: '10000'}, // item
    {names: 'bruce', salary: '12200'},
    {names: 'anna', salary: '99900'}

];

function add(employees, fn){
    var result = fn(employees);
    return result;

}

function fn(data){
    var sum = 0;
    for (var i=0; i<data.length; i++){
        sum += Number(data[i].salary);
    }

    return sum;
}

var response = add(employees, fn);

console.log(response);