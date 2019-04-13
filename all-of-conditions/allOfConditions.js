function allOfConditions(...fns) {
  return (param) => {
    for (const fn of fns) {
      const result = fn(param);
      if (!result) {
        break;
      }
    }
  };
}

export { allOfConditions };
