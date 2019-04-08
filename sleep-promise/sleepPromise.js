
// function sleep(ms) {
//   const innerPromise = new Promise(resolve => setTimeout(resolve, ms));
//   const innerSleep = innerPromise.then(val => val);
//   // console.log(innerSleep);
//   // innerSleep.then = (...args) => innerPromise.then(...args);
//   return innerSleep;
// }

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export {
  sleep,
};
