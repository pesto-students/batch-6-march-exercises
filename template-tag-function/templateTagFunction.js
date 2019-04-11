
function html(strings, ...values) {
  console.log(strings);
  const newString = strings.map(string => string.replace(/&/g, '&amp;')
    .replace(/</g, '&amp;lt;')
    .replace(/>/g, '&amp;gt;')
    .replace(/"/g, '&amp;quot;')
    .replace(/'/g, '&#039;'));
  return newString.join(' ');
}

function callTemplateTagFunction(...args) {
  return html`The expression 5 > 4 is "true" & 3 < 1 is false`;
}

export {
  callTemplateTagFunction,
};
