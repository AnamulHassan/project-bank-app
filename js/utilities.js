function getInput(variable) {
  const inputData = variable.value;
  return inputData;
}
function getInnerText(variable) {
  const inputData = variable.innerText;
  return inputData;
}
let currentAccount;
function userValidation(userName, Password) {
  accounts.find((element) => {
    if (
      element.userId === userName.toLowerCase() &&
      element.password === Password
    ) {
      localStorage.setItem('userInfo', JSON.stringify(element));
      currentAccount = true;
      return currentAccount;
    } else {
      currentAccount = false;
      return currentAccount;
    }
  });
}
function updateUI() {
  let objectData = localStorage.getItem('userInfo');
  let convertObjectData = JSON.parse(objectData);

  setInnerText(userName, convertObjectData.name);
  setInnerText(currentBalance, convertObjectData.currentBalance);
}

function setInnerText(id, value) {
  id.innerText = value;
}
function clearInputField(inputId) {
  inputId.value = '';
}

function getDateTime() {
  let date = new Date();
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0');
  let yy = String(date.getFullYear());
  let today = dd + '/' + mm + '/' + yy;
  setInnerText(dateMonthYear, today);
}
