
function templateLiterals() {
  const names = ['Rooney', 'Ronaldo', 'Messi', 'Pogba'];
  const insertComma = (idx) => {
    const value = idx === 0 ? '' : ',';
    return value;
  };
  const insertPeriod = (idx, arr) => {
    const value = idx === arr.length - 1 ? '.' : '';
    return value;
  };


  return names.reduce((acc, el, idx) => `${acc}${insertComma(idx)} ${el}${insertPeriod(idx, names)}`, 'There are 4 people on the football team. Their names are');
}

export {
  templateLiterals,
};
