const dataset = require('./dataset.json');

const accounts = dataset.bankBalances;

function hundredThousandairs() {
  return accounts.filter(account => parseFloat(account.amount) > 100000);
}

function datasetWithRoundedDollar() {
  return accounts.map(account => Object.assign(account, { rounded: Math.round(account.amount) }));
}

function sumOfBankBalances() {
  const sum = accounts.reduce((acc, account) => acc + parseFloat(account.amount), 0);
  return parseFloat(sum.toFixed(2));
}

function sumOfInterests() {
  const roundToNearestCents = (dollars) => {
    const cents = dollars * 100;
    return (Math.round(cents) / 100);
  };
  const stateCodesForSum = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  const filteredAccounts = accounts.filter(account => stateCodesForSum.includes(account.state));

  return filteredAccounts.reduce((acc, account) => {
    const interestAmount = (0.189 * parseFloat(account.amount));
    return parseFloat((acc + roundToNearestCents(interestAmount)).toFixed(2));
  }, 0);
}

function higherStateSums() {
  const stateTotals = accounts.reduce((acc, account) => {
    const initialValue = acc[account.state] !== undefined ? acc[account.state] : 0;
    acc[account.state] = initialValue + parseFloat(account.amount);
    return acc;
  }, []);
  const keys = Object.keys(stateTotals);
  const filteredTotals = [];
  for (const key of keys) {
    if (stateTotals[key] > 1000000) {
      filteredTotals.push(stateTotals[key]);
    }
  }
  return filteredTotals.reduce((acc, val) => acc + val);
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
