btnLogout.addEventListener('click', function () {
  window.location.href = 'login.html';
});

updateUI();
getDateTime();

btnDeposit.addEventListener('click', function () {
  const newDeposit = +getInput(inputNewDeposit);
  const initialDepositPrevious = +getInnerText(initialDeposit);
  const totalBalance = +getInnerText(currentBalance);
  const initialDepositTotal = initialDepositPrevious + newDeposit;
  const currentTotalBalance = totalBalance + newDeposit;
  setInnerText(initialDeposit, initialDepositTotal);
  setInnerText(currentBalance, currentTotalBalance);
  clearInputField(inputNewDeposit);
});

btnWithdraw.addEventListener('click', function () {
  const newWithdraw = +getInput(inputNewWithdraw);
  const initialWithdrawPrevious = +getInnerText(initialWithdraw);
  const totalBalance = +getInnerText(currentBalance);
  if (newWithdraw > totalBalance) {
    return alert("You don't have sufficient money :(");
  }
  const initialWithdrawTotal = initialWithdrawPrevious + newWithdraw;
  const currentTotalBalance = totalBalance - newWithdraw;
  setInnerText(initialWithdraw, initialWithdrawTotal);
  setInnerText(currentBalance, currentTotalBalance);
  clearInputField(inputNewWithdraw);
});
