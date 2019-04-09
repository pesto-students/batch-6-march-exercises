
function updateInventory(inventory, delivery) {
  const updatedInventory = delivery.reduce((acc, current) => {
    const index = acc.findIndex(el => el[1] === current[1]);
    if (index >= 0) {
      acc[index][0] += current[0];
    } else {
      acc.push(current);
    }
    return acc;
  }, [...inventory]);

  return updatedInventory.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    return 0;
  });
}

export {
  updateInventory,
};
