
function mapFilterAndReduce(objects) {
  const filteredObjects = objects.filter(object => object.firstName.length < 5);
  return filteredObjects.reduce((acc, obj) => (
    { ...acc, [obj.firstName]: obj.firstName.length }
  ), {});
}

export {
  mapFilterAndReduce,
};
