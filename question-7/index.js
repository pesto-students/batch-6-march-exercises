const dropDown = document.getElementById('colorSelect');

// eslint-disable-next-line no-unused-vars
const removeColor = () => {
  const { selectedIndex } = dropDown;
  dropDown.remove(selectedIndex);
};
