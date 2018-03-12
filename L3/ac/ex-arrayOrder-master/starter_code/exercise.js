var exercise = {};

exercise.order = function(unordered) {
    var ordered = [];

    // Sorting a numerical array from minimum to maximum
    // -------------------------------	
    // ---------- Your Code ----------
    // -------------------------------

    unordered.sort(compare);

    var ordered = unordered.sort(compare);

    function compare(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        if (a === b) return 0;
    }

    console.log(ordered);
    return ordered;
};

var unordered = [11, 2, 15, 4, 5, 20, 7, 17, 13, 10, 1, 12, 9, 14, 3, 16, 8, 18, 19, 6];
exercise.order(unordered);
//
// module.exports = exercise;
