const replacementfn = (el) => {
  console.log(el);
  return el.replace(/&/g, '&amp;')
    .replace(/</g, '&amp;lt;')
    .replace(/"/g, '&amp;quot;')
    .replace(/>/g, '&amp;gt;');
};

function encode(string) {
  console.log(string);
  return string.map(replacementfn).join('');
}

function callTemplateTagFunction() {
  return encode`The expression 5 > 4 is "true" & 3 < 1 is false`;
}

export { callTemplateTagFunction };
