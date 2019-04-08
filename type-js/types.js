
function type(param) {
  if (param === null) {
    return 'Null';
  }
  if (param === undefined) {
    return 'Undefined';
  }
  return param.constructor.name;
}

export {
  type,
};
