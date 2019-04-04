
const restructureInventory = (inventory, existingInventory) => inventory.reduce((acc, item) => {
  const [itemQuantity, itemName] = item;
  if (itemName in acc) {
    acc[itemName] += itemQuantity;
  } else {
    acc[itemName] = itemQuantity;
  }
  return acc;
}, existingInventory);

function updateInventory(currInventory, updatedInventory) {
  let inventory = restructureInventory(currInventory, []);
  inventory = restructureInventory(updatedInventory, inventory);

  const objKeys = Object.keys(inventory);
  let newInventory = [];
  for (const key of objKeys) {
    newInventory = [...newInventory, [inventory[key], key]];
  }

  return newInventory.sort((a, b) => a[1].localeCompare(b[1]));
}

export {
  updateInventory,
};
