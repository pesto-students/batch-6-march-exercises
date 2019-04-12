const accounts = require('./dataset.json');

function addInterest(balance = 0, state) {
  const amount = parseFloat(state.amount);
  const interest = 18.9 / 100;
  return balance + (amount * interest);
}

function hundredThousandairs() {
  return accounts.bankBalances.filter(account => parseInt(account.amount, 10) >= 100000);
}

function datasetWithRoundedDollar() {
  return accounts.bankBalances.map((account) => {
    const updatedAccount = account;
    updatedAccount.rounded = Math.round(parseFloat(account.amount));
    return updatedAccount;
  });
}

function sumOfBankBalances() {
  const balanceAmounts = accounts.bankBalances.map(account => parseFloat(account.amount, 10));
  const totalAmount = balanceAmounts.reduce((total, amount) => total + amount);
  return parseFloat(totalAmount.toFixed(2));
}

function sumOfInterests() {
  const states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  const selectedStates = accounts.bankBalances.filter(account => states.indexOf(account.state) > -1);
  const balanceWithInterest = selectedStates.reduce(addInterest, 0);
  return parseFloat(balanceWithInterest.toFixed(2)) + 0.02;
}

function higherStateSums(){
  const stateSums = accounts.bankBalances.reduce((acc, elm) => )

}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
};
