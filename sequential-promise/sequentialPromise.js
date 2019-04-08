
let sequentialPromise = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve('dude');
  }, 1000);
});

let p2 = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve(`${dude}, wheres my car`);
  }, 300);
});

let p3 = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve(`${movieName} is a terrible movie`);
  }, 0);
});

sequentialPromise()
.then(result => p2(result))
.then(result => p3(result));

export {
  sequentialPromise,
};
