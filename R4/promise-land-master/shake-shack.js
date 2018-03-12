function sleep(ms) {
    return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        }
    )

}

const cookTimes = {
    cheese: 5000,
    veggie: 3000,
    triple: 8000,
};



module.exports = {
  makeBurgerSync: (name, burger) => {
    return { name, burger };
  },
  makeBurgerCallback: (name, burger, cb) => {
    setTimeout(() => cb({ name, burger }), cookTimes[burger]);
  },
  makeBurgerPromise: (name, burger) => {
    return new Promise((res, rej) =>
      setTimeout(res, cookTimes[burger], { name, burger }),
    );
  },
};

// module.exports = {
//     makeBurgerSync: function (name, burger){
//       return { name, burger };
//     },
//     makeBurgerCallback: function(name, burger, cb){
//       setTimeout(function(){
//           cb({ name, burger })
//         },
//          cookTimes[burger]);
//     },
//     makeBurgerPromise: function(name, burger){
//       return new Promise(function(res, rej)
//         {
//             // resolve's method
//             setTimeout(res, cookTimes[burger], { name, burger })
//             // passing parameters name and burger into res
//         },

//             // reject's method
//       );
//     },
//   };
  
