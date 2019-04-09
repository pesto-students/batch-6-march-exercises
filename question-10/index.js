const page = document.getElementById('page');
const header = document.getElementById('header');
const content = document.getElementById('content');

const { firstElementChild } = content;
const { lastElementChild } = content;
const { nextElementSibling } = header;
const { previousElementSibling } = content;
const { parentElement } = header;
const { children } = page;
const childNodes = [...children];

const backgroundColors = ['red', 'blue', 'green'];
const fontColors = ['black', 'grey', '#0812FF'];
const alternateBackgrounds = ['#C3FF5C', '#48E885', '#E8C648'];

function* raiseIndex() {
  let index = 0;
  while (true) {
    if (index > 2) {
      index = 0;
    }
    yield index += 1;
  }
}

const it = raiseIndex();

function toggle(value, attr = 'style') {
  this.setAttribute(attr, value);
}

// eslint-disable-next-line no-unused-vars
const control = {
  toggleFirst: () => {
    toggle.call(firstElementChild, `font-size:${it.next().value + 0.5}rem`);
  },
  toggleLast: () => {
    toggle.call(lastElementChild, `color:${backgroundColors[it.next().value]}`);
  },
  togglePrev: () => {
    toggle.call(previousElementSibling, `color:${fontColors[it.next().value]}`);
  },
  toggleNextElm: () => {
    toggle.call(nextElementSibling, `margin-left:${it.next().value * 100}px`);
  },
  toggleParentElm: () => {
    toggle.call(parentElement, `background-color: ${alternateBackgrounds[it.next().value]}`);
  },
  toggleChild: () => {
    raiseIndex();
    childNodes.forEach((child) => {
      const currentChild = child;
      if (it.next().value % 2 === 0) {
        currentChild.innerHTML = currentChild.innerHTML.toUpperCase();
      } else {
        currentChild.innerHTML = currentChild.innerHTML.toLowerCase();
      }
    });
  },
};
