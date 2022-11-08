"use strict";

const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const passwordInput = document.querySelector(".form-input-password");
const errorMessage = document.querySelector(".error-text");
const subBtn = document.querySelector(".submit-button");
const myForm = document.getElementById("form");

const passwordValidate = function (e) {
  if (
    password.value === passwordConfirm.value &&
    password.value &&
    passwordConfirm.value
  )
    return;

  e.preventDefault();
  if (password.value === "" && passwordConfirm.value === "") {
    handleBlank();
    return;
  }

  handleError();
};

const handleError = function () {
  password.classList.add("error");
  passwordConfirm.classList.add("error");
  errorMessage.textContent = "*Passwords do not match";
};

const handleBlank = function () {
  password.classList.add("error");
  passwordConfirm.classList.add("error");
  errorMessage.textContent = "*Please enter password";
};

subBtn.addEventListener("click", passwordValidate);

// myForm.addEventListener("submit", function () {
//   if (password.value !== passwordConfirm.value) {
//     alert("no match!");
//   } else if (password.value === "" && passwordConfirm.value === "") {
//     alert("Please enter password");
//   } else if (password.value === passwordConfirm.value) {
//     console.log("pass");
//   }
// });
