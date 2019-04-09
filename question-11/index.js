const title = document.getElementById('title');
const content = document.getElementById('content');
const childNode = title.childNodes[0];
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
let bigFont = false;

// eslint-disable-next-line no-unused-vars
const changeAttribute = () => {
  bigFont = !bigFont;
  const attributeNames = content.getAttributeNames();
  const newAttrValue = bigFont ? 'font-size: 2rem' : 'font-size: 1rem';
  content.setAttribute(attributeNames[1], newAttrValue);
};
