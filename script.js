"use strict";
const notifyButton = document.querySelector(".notify-button");
const formInput = document.querySelector(".form-input");
const inputLabel = document.querySelector('.input-label');
const regX = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8}).([a-z]{2,8})?$/;
function ValidateEmail() {
 const emailAddress = formInput.value;
  if(regX.test(emailAddress)){
    formInput.style.border = "1px solid green";
    formInput.disabled=true;
    // formInput.background="#fff";
    console.log("Your Email is Valid")
  }
  else{
  console.log("Invalid Email Address");
  formInput.classList.add('error');
  formInput.value="";
  }
}

notifyButton.addEventListener("click", ValidateEmail);
