var exercise = {};
exercise.flag = 0;
exercise.increment = 10;
exercise.run = function() {
    var element = document.getElementById("T1");
    var img = document.getElementById("i1");
    if (exercise.flag == 0) {
        img.src = "PacMan1.png";
        element.innerHTML = "Open";
        console.log(img.style.left);
        exercise.flag= 1;
    }
    else if (exercise.flag == 1) {
        img.src = "PacMan2.png";
        element.innerHTML = "Closed";
        console.log(img.style.left);
        exercise.flag = 0;
    }
};

// exercise.updatePosition = function() {
//     // increment exercise.pos.x by increment
//     // now set image position using img1.style.left
//     // remember images positions are "xxx.px"
//
//     exercise.pos.x = exercise.pos.x + exercise.increment;
//     console.log( exercise.pos.x + exercise.increment);
//     exercise.img1.style.left = exercise.pos.x;
//
//
// };