const text = document.getElementById('text');
let currentIndex = 0;
const colors = ['green', 'red', 'blue'];
// eslint-disable-next-line no-unused-vars
function jsStyle() {
  currentIndex = currentIndex >= 2 ? 0 : currentIndex + 1;
  text.setAttribute('style', `background-color: ${colors[currentIndex]}`);
}
