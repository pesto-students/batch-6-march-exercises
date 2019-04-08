
function diffArray(set1, set2) {
  var intersection = [];

  set1.forEach(function(set1Value){
    var sameValueIndexSet2 = set2.indexOf(set1Value);
    if(sameValueIndexSet2 > -1){
      set2.splice(sameValueIndexSet2, 1);
    }else{
      intersection.push(set1Value);
    }
  })

  intersection = intersection.concat(set2);
  return intersection;
}

export {
  diffArray,
};
