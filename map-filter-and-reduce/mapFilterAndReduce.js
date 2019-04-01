/* eslint-disable no-param-reassign */

function mapFilterAndReduce(array) {
  return array.reduce((obj, currentItem) => {
    if (currentItem.firstName.length < 5) {
      obj[currentItem.firstName] = currentItem.firstName.length;
      return obj;
    }
    return obj;
  }, {});
}

export {
  mapFilterAndReduce,
};


// [{
//   firstName: 'Tony',
// }, {
//   firstName: 'Steve',
// }, {
//   firstName: 'Tchala',
// }, {
//   firstName: 'Thor',
// }]
