btnLogin.addEventListener('click', function () {
  const userId = getInput(inputUserName);
  const userPassword = getInput(inputUserPassword);
  userValidation(userId, userPassword);
  if (currentAccount === true) {
    window.location.href = 'dashboard.html';
    clearInputField(inputUserName);
    clearInputField(inputUserPassword);
  } else {
    return alert("Your email and password didn't match, Please try again!");
  }
});
