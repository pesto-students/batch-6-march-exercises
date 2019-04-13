/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
const dataset = require('./dataset.json');

function accountDataset(...args) {
  return args;
}
function hundredThousandairs() {
  return dataset.bankBalances.filter(account => parseInt(account.amount, 10) > 100000);
}

function datasetWithRoundedDollar() {
  return dataset.bankBalances.map((account) => {
    // eslint-disable-next-line no-param-reassign
    account.rounded = parseInt(Math.round(parseFloat(account.amount)), 10);
    return account;
  });
}

function sumOfBankBalances() {
  return parseFloat(
    dataset.bankBalances
      .reduce((total, currentBalance) => total + parseFloat(currentBalance.amount), 0)
      .toFixed(2),
  );
}

function sumOfInterests() {
  const states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  const requiredAccountsSum = dataset.bankBalances.reduce((total, currentAccount) => {
    if (states.includes(currentAccount.state)) {
      total += parseFloat(currentAccount.amount);
      return total;
    }
    return total;
  }, 0);
  return (requiredAccountsSum * 18.9) / 100;
}

function higherStateSums() {
  const stateWiseSum = dataset.bankBalances.reduce((obj, currentAccount) => {
    obj.hasOwnProperty(currentAccount.state)
      ? (obj[currentAccount.state] += parseFloat(currentAccount.amount))
      : (obj[currentAccount.state] = parseFloat(currentAccount.amount));
    return obj;
  }, {});

  return Object.values(stateWiseSum).reduce((total, amount) => {
    if (amount > 1000000) {
      total += amount;
      return total;
    }
    return total;
  }, 0);
}
export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  higherStateSums,
  sumOfInterests,
};
