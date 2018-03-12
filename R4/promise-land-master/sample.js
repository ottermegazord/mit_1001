
function myPets(){

    cats(function(listOfCats){
        listOfCats.forEach(printer);
    });

    function printer(cat){
        console.log("my cat's name is " + cat.name + " and he is " + cat.age + " years old");
    }  
  
};

function cats(x){
    var listOfCats = [
        {name: 'rick', age: 12},
        {name: 'morty', age: 9},
        {name: 'bill', age: 6},
        {name: 'ted', age: 10}
    ]

    x(listOfCats);
};

myPets();