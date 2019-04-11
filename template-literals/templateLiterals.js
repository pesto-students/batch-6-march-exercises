
function templateLiterals(args = ['Rooney', 'Ronaldo', 'Messi', 'Pogba']) {
  const names = args.join(', ');
  return `There are 4 people on the football team. Their names are ${names}.`;
}

export {
  templateLiterals,
};
