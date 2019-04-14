/* eslint-disable array-callback-return */
/* eslint-disable prefer-destructuring */
function updateInventory(currentInventory, newInventory) {
  const toObject = nestedArray => nestedArray.reduce((acc, currentArray) => {
    acc[currentArray[1]] = currentArray[0];
    // console.log(acc);
    return acc;
  }, {});

  const currentInventoryObject = toObject(currentInventory);
  newInventory.map((arr) => {
    if (Object.prototype.hasOwnProperty.call(currentInventoryObject, arr[1])) {
      currentInventoryObject[arr[1]] += arr[0];
    } else {
      currentInventoryObject[arr[1]] = arr[0];
    }
  });

  return Object.keys(currentInventoryObject).map(key => [currentInventoryObject[key], key]);
}

export { updateInventory };
