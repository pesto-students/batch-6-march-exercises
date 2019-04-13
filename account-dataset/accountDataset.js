const accounts = require('./dataset.json');

function addInterest(balance = 0, state) {
  const amount = parseFloat(state.amount);
  const interest = 0.189;
  return parseFloat((balance + (amount * interest)).toFixed(2));
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
  const isInStates = account => states.indexOf(account.state) > -1;
  const selectedStates = accounts.bankBalances.filter(isInStates);
  const balanceWithInterest = selectedStates.reduce(addInterest, 0);
  return parseFloat(balanceWithInterest);
}

function higherStateSums() {
  const oneMillion = 1000000;
  const stateSum = accounts.bankBalances.reduce((acc, el) => {
    if (!acc[el.state]) {
      acc[el.state] = parseFloat(el.amount);
      return acc;
    }
    acc[el.state] += parseFloat(el.amount);
    return acc;
  }, {});
  const richStates = Object.keys(stateSum).filter(state => stateSum[state] > oneMillion);
  return richStates.reduce((acc, el) => acc + stateSum[el], 0);
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
