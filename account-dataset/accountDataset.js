const dataset = require('./dataset.json');
const accounts = dataset.bankBalances;

function hundredThousandairs(...args) {
  return accounts.filter(function(account){
    return parseFloat(account.amount) > 100000;
  });
}

function datasetWithRoundedDollar() {
  return accounts.map(function(account){
    account.rounded = Math.round(account.amount);
    return account;
  })
}

function sumOfBankBalances() {
  var sum = 0;
  sum = accounts.reduce(function(accumulator, account){
    return accumulator + parseFloat(account.amount);
  }, sum);
  return parseFloat(sum.toFixed(2));
}

function sumOfInterests() {

}

function higherStateSums () {

}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
