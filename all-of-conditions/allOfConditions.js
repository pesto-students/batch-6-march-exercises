
function allOfConditions(...args) {
  return (input) => {
    for (const i of args) {
      const retVal = i(input);
      if (!retVal) {
        break;
      }
    }
  };
}

export {
  allOfConditions,
};
