const dataset = require('./dataset.json');

function hundredThousandairs() {
  return dataset.bankBalances.filter(bankBalance => parseInt(bankBalance.amount, 10) > 100000);
}

function datasetWithRoundedDollar() {
  return dataset.bankBalances.map(bankBalance => ({
    amount: bankBalance.amount,
    state: bankBalance.state,
    rounded: Math.round(bankBalance.amount),
  }));
}

function sumOfBankBalances() {
  const totalSum = dataset.bankBalances
    .reduce((existingSum, bankBalance) => existingSum + parseFloat(bankBalance.amount, 10), 0);
  const sumInDecimal = parseFloat(totalSum.toFixed(2));
  return sumInDecimal;
}

function getStateBalances(bankBalances) {
  return bankBalances.reduce((acc, { state, amount }) => {
    if (state in acc) {
      acc[state] += Number(amount);
    } else {
      acc[state] = Number(amount);
    }
    return acc;
  }, {});
}

function sumOfInterests() {
  const stateBalance = getStateBalances(dataset.bankBalances);

  const getInterest = amount => amount * 18.9 / 100;

  return Object.values(stateBalance).reduce((acc, cur) => acc + cur + getInterest(cur), 0);
}

function higherStateSums() {
  const stateBalances = getStateBalances(dataset.bankBalances);
  return Object.values(stateBalances).reduce((acc, cur) => (cur > 1000000 ? acc + cur : acc), 0);
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
