
function counter() {
  let count = 0;
  return function retf() {
    count += 1;
    return count;
  };
}

export { counter };
