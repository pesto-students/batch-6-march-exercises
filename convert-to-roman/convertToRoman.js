
function convertToRoman(numberToConvert) {
  var romanNumberSymbols = [
    {
      symbol: 'M',
      decimalValue: 1000,
    },
    {
      symbol: 'CM',
      decimalValue: 900,
    },
    {
      symbol: 'D',
      decimalValue: 500
    },
    {
      symbol: 'CD',
      decimalValue: 400
    },
    {
      symbol: 'C',
      decimalValue: 100
    },
    {
      symbol: 'XC',
      decimalValue: 90
    },
    {
      symbol: 'L',
      decimalValue: 50
    },
    {
      symbol: 'XL',
      decimalValue: 40
    },
    {
      symbol: 'X',
      decimalValue: 10
    },
    {
      symbol: 'IX',
      decimalValue: 9
    },
    {
      symbol: 'V',
      decimalValue: 5
    },
    {
      symbol: 'IV',
      decimalValue: 4
    },
    {
      symbol: 'I',
      decimalValue: 1
    }
  ]
  var convertedNumber;
  for(var i = 0; i < romanNumberSymbols.length; i++){
    var composite = numberToConvert - (numberToConvert % romanNumberSymbols[i].decimalValue);
    if(composite > 0){
      for(var j = 0; j < composite / romanNumberSymbols[i].decimalValue; j++){
        convertedNumber = convertedNumber ? convertedNumber + romanNumberSymbols[i].symbol : romanNumberSymbols[i].symbol;
      }
      
      numberToConvert -=  composite;
    }
    if(numberToConvert === 0){
      break;
    }
  }
  return convertedNumber;
}

export {
  convertToRoman,
};
