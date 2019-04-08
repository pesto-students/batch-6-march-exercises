import { isArray } from "util";

const dataset = require("./dataset.json");

function hundredThousandairs() {
  return dataset.bankBalances.filter(account => account.amount > 100000);
}
function datasetWithRoundedDollar() {
  return dataset.bankBalances.map(account => {
    return {
      amount: account.amount,
      state: account.state,
      rounded: Math.round(account.amount)
    };
  });
}
function sumOfBankBalances() {
  var totalBalance = dataset.bankBalances
    .reduce((partialTotal, account) => {
      return partialTotal + parseFloat(account.amount);
    }, 0)
    .toFixed(2);
  return parseFloat(totalBalance);
}
function sumOfInterests() {
  var states = ["WI", "IL", "WY", "OH", "GA", "DE"];
  var interestsTotal = states.reduce((partialSumOfInterests, state) => {
    var stateAccounts = dataset.bankBalances.filter(
      account => account.state === state
    );
    var stateTotalAmount = stateAccounts.reduce((partialTotal, account) => {
      return (
        partialTotal +
        (parseFloat(account.amount) + (parseFloat(account.amount) * 18.9) / 100)
      );
    }, 0);
    return partialSumOfInterests + parseFloat(stateTotalAmount);
  }, 0);
  return parseFloat(interestsTotal).toFixed(2);
}
function higherStateSums() {
  var stateWiseSortedAccounts = dataset.bankBalances.reduce(
    (stateWiseAccounts, account) => {
      var isStateWiseArrayExists = isArray(stateWiseAccounts[account.state]);
      if (!isStateWiseArrayExists) {
        stateWiseAccounts[account.state] = [];
        stateWiseAccounts[account.state]={
           stateTotal : account.amount
        };
        
      }
      else{
        
        stateWiseAccounts[account.state].stateTotal =
          stateWiseAccounts.stateTotal + account.amount;
      }
    
      return stateWiseAccounts;
    },
    {  }
  );
  console.log(stateWiseSortedAccounts);

return stateWiseSortedAccounts.filter(state => state.stateTotal > 1000000).reduce((partialSum, filteredState)=>{
  return partialSum+filteredState.stateTotal;
});
 }

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
