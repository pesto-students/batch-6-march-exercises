// const dataset = require('./dataset.json');

// function hundredThousandairs() {
//   return dataset.bankBalances.filter(bankBalance => parseInt(bankBalance.amount, 10) > 100000);
// }

// function datasetWithRoundedDollar() {
//   return dataset.bankBalances.map(bankBalance => ({
//     amount: bankBalance.amount,
//     state: bankBalance.state,
//     rounded: Math.round(bankBalance.amount),
//   }));
// }

// function sumOfBankBalances() {
//   const totalSum = dataset.bankBalances
//     .reduce((existingSum, bankBalance) => existingSum + parseFloat(bankBalance.amount, 10), 0);
//   const sumInDecimal = parseFloat(totalSum.toFixed(2));
//   return sumInDecimal;
// }

// function sumOfInterests() {
//   const stateBalance = dataset.bankBalances.reduce((accumulatedBalance, currentValue) => {
//     const { state, amount } = currentValue;
//     if (!(state in accumulatedBalance)) {
//       accumulatedBalance[state] = amount;
//     } else {
//       accumulatedBalance[state] += amount;
//     }
//     return accumulatedBalance;
//   });

//   const getInterest = amount => amount + amount * 18.9 / 100;
//   let totalBalance = 0;

//   for (const state in stateBalance) {
//     const balanceWithInterest = getInterest(parseFloat(stateBalance[state]));
//     totalBalance += balanceWithInterest;
//     console.log(totalBalance)
//   }
//   const balanceInDecimal = parseFloat(totalBalance.toFixed(2));
//   return balanceInDecimal;
// }

// export {
//   hundredThousandairs,
//   datasetWithRoundedDollar,
//   sumOfBankBalances,
//   sumOfInterests,
// };
