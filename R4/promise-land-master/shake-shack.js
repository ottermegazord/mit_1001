function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
