import { isArray } from "util";

function steamrollArray(...args) {
  var givenNestedArray = args[0];
  var  steamRolledArray = givenNestedArray.map( function( subArray ){ 
    return flatten( subArray );
  });
  
  
   return steamRolledArray;
}
function flatten(arr){
  if (Array.isArray(arr)){
   return flatten(arr[0]); 
  }
  else {
    return arr;
  }
}

export {
  steamrollArray,
};
