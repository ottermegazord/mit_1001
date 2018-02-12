var exercise = {};
exercise.flag = 0;

exercise.pos = {
    x:40
};

exercise.run = function() {
    exercise.img = document.getElementById("i1");
    exercise.element = document.getElementById("T1");
    exercise.img.style.position = "absolute";
    //exercise.img.style.left = "0px";
    exercise.mouth();
    exercise.move();
    console.log(document.getElementById("i1").style.left);
};

exercise.mouth = function() {
    if (exercise.flag == 0) {
        exercise.img.src = "PacMan1.png";
        exercise.element.innerHTML = "Open";
        exercise.flag = 1;
    }
    else if (exercise.flag == 1) {
        exercise.img.src = "PacMan2.png";
        exercise.element.innerHTML = "Closed";
        exercise.flag = 0;
    }
};

exercise.move = function(){
    exercise.pos.x = exercise.pos.x + 10;
    exercise.img.style.left = exercise.pos.x + 'px';
    //console.log(document.getElementById("i1").style.left);

};

