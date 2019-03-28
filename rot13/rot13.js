
function rot13(...args) {
  var textToBeCiphered = args[0];
  return textToBeCiphered.replace( /[A-Za-z]/g , function( singleLetter ) {
    return String.fromCharCode( singleLetter.charCodeAt(0) + ( singleLetter.toUpperCase() <= "M" ? 13 : -13 ) );
  } );
   
}

export {
  rot13,
};
