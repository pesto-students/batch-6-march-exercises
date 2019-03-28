
function bouncer(givenArray) {
   return givenArray.filter(function(value){
     if(value){
       return true;
     }else{
       return false;
     }
  });
}

export {
  bouncer,
};
