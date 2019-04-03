
function steamrollArray(array) {
  return array.reduce((res, val) => {
    let tempArray = [val];
    if (Array.isArray(val)) {
      tempArray = steamrollArray(val);
    }
    return [...res, ...tempArray];
  }, []);
}

export {
  steamrollArray,
};
