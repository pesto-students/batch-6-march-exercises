const page = document.getElementById('title');
const childNode = page.childNodes[0];
const nodeValues = [childNode.nodeValue, 'newValue1', 'newValue2'];
let index = 0;
// eslint-disable-next-line no-unused-vars
const changeValue = () => {
  index += 1;
  if (index > 2) {
    index = 0;
  }
  childNode.nodeValue = nodeValues[index];
};
