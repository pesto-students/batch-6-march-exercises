
function allOfConditions(...args) {
  return (input) => {
    for (const arg of args) {
      const output = arg(input);
      if(output === false) {
        break;
      }
    }
  };
}

export {
  allOfConditions,
};
