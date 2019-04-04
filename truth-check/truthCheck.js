
function truthCheck(objects, prop) {
  return objects.every(el => Boolean(el[prop]));
}

export {
  truthCheck,
};
