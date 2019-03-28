const accounts = require('./dataset.json')

function hundredThousandairs(){
  return accounts.bankBalances.filter((account) => {
    return parseInt(account.amount) >= 100000;
  })
}

function datasetWithRoundedDollar(){
  return accounts.bankBalances.map((account)=>{
    var updatedAccount = account;
    updatedAccount.rounded = Math.round(parseFloat(account.amount));
    return updatedAccount;
  })
}

function sumOfBankBalances(){
  var balanceAmounts = accounts.bankBalances.map((account)=>{
    return parseFloat(account.amount);
  })

  var totalAmount = balanceAmounts.reduce((total, amount)=>{
    return total + amount;
  })
  return parseFloat(totalAmount.toFixed(2));
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances
};
