
const simpleIterable = {
  [Symbol.iterator]() {
      let data = [1,2,3,4,5,6]
      return { 
          next() {
              return {
                  done: data.length === 0,
                  value: data.pop()
              }    
          }
      }
  }
}


export {
  simpleIterable,
};
