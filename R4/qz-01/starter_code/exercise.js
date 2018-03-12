var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    return 'Hello!';
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------
    var arr = [1, 2, 3, 4];
    return arr;
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------

    var obj = {
        name: 'Cristiano Ronaldo',
        age: 33
    }
    return obj;
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------
    var arr = [{},{},{}];
    return arr;
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------
    someObject.name = "Cristiano Ronaldo";
    return someObject;
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------
    return someArray[2];
};

exercise.concatenate = function(string1, string2, string3){
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------
    var concat_str = string1+string2+string3
    return concat_str;
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------

    var filtered = someNumbers.filter(isBigEnough);

    function isBigEnough(item){
        var comparison = item > 6;
        return comparison
    }

    return filtered;
};

exercise.getNames = function(people){
    // ----------------------------------------
    //   QUESTION 09
    //   Return a new array with
    //   the "name" property values.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', age:18},
    //         {name:'bruce', age:22},
    //         {name:'clark', age:25},
    //         {name:'diana', age:29}
    //   ];
    //
    //   You should return
    //     ['peter','bruce','clark','diana']
    // ----------------------------------------


    var names = [];

    people.forEach(pushName);

    function pushName(item){
        names.push(item.name);
    }

    return names;
};

exercise.getSalaryTotal = function(people){
    // ----------------------------------------
    //   QUESTION 10
    //   Return the sum of all the
    //   salaries in array.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', salary:1000},
    //         {name:'bruce', salary:2000},
    //         {name:'clark', salary:3000},
    //         {name:'diana', salary:4000}
    //     ];
    //
    //   you should return
    //     10000
    // ----------------------------------------

    var salaries = 0;

    people.forEach(add);

    function add(item){
        salaries += item.salary;
    }

    return salaries;
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------

    someNumbers.sort(compare);

    function compare(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        if (a === b) return 0;
    }

    return someNumbers;
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    callback();
    // return 'Error: Question 12 not implemented';
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------

    var length = payroll.length;
    var arr = [];

    for (var i =0; i< length; i++){
        var in_arr = [];
        in_arr[0] = payroll[i][1];
        in_arr[1] = payroll[i][2];
        arr.push(in_arr);
    }
    return arr;
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------

    var total = payroll.reduce(add, 0); // zero refers to prev

    function add(prev, curr){
        prev += Number(curr[3]);
        return prev
    }
    return total;
};

exercise.getEarningsAbove = function(payroll, target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------

    var count = 0;
    var aim = target;

    payroll.forEach(isBigEnough);

    function isBigEnough(item,aim){
        if(item[3] >= target){
            count++;
        }
    }
    return count;
};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------

    var total = 0;

    payroll.forEach(check);

    function check(item,num){
        var zipCode = item[4];

        for(var i = 0; i<zipCode.length; i++){
            if (zipCode[i] == 3){
                total += 1;
            }
        }

    };

    return total;
    
    
};


module.exports = exercise;
