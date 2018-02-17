var exercise = {};

exercise.roman = function(time){
    //-------------------------------------
    //  YOUR CODE
    //    Return an object with roman time. 
    //    Time is reported using 6 columns.
    //
    //  For example, for 05:13:47 PM
    //    { 
    //       hour_col1 : 1, 
    //       hour_col2 : 7,
    //       min_col1  : 1, 
    //       min_col2  : 3, 
    //       sec_col1  : 4, 
    //       sec_col2  : 7
    //     };
    // 
    //-------------------------------------
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var romanize = {
        hour_col1: Math.floor((hours/10)%10),
        hour_col2: Math.floor((hours/1)%10),
        min_col1: Math.floor((minutes/10)%10),
        min_col2: Math.floor((minutes/1)%10),
        sec_col1: Math.floor((seconds/10)%10),
        sec_col2: Math.floor((seconds/1)%10)
    };

    return romanize;
};

exercise.binary = function(time, col){
	//----------------------------------------------------------
    //  YOUR CODE
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    //
    //  For example, for time 05:13:47 PM, and column hour_col2
    //    var binary = { 
    //        position8 : 'off', 
    //        position4 : 'on', 
    //        position2 : 'on', 
    //        position1 : 'on', 
    //    }; 
    // 
    //----------------------------------------------------------
    var romanizer = exercise.roman(time);
    var digit = romanizer[col];

    var binary = {
        position8: 'off',
        position4: 'off',
        position2: 'off',
        position1: 'off'
    };

    if (digit >= 8){
        digit -= 8;
        binary.position8 = 'on';
    }

    if (digit >= 4){
        digit -=4;
        binary.position4 = 'on';
    }

    if (digit >= 2){
        digit -=2;
        binary.position2 = 'on';
    }

    if (digit >= 1){
        digit -=1;
        binary.position1 = 'on';
    }

    return binary;
};