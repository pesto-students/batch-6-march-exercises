
function bouncer(...args) {
  var arrayToBeChecked = args[0];
  var checkedArrayContainer = [];
  checkedArrayContainer = arrayToBeChecked
    .filter(Boolean ); 
   
  return checkedArrayContainer;
}

export {
  bouncer,
};
