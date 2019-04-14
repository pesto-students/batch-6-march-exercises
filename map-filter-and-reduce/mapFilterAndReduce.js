
function mapFilterAndReduce(people) {
  const shortNames = people.filter(person => person.firstName.length < 5);
  return shortNames.reduce((nameLengths, person) => {
    const names = nameLengths;
    names[person.firstName] = person.firstName.length;
    return names;
  }, {});
}

export {
  mapFilterAndReduce,
};
