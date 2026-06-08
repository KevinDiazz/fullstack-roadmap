"use strict";
// Practica de formularios y eventos
/* Ejercicio 1 - Live Name
Objetivo: Cada vez que el usuario escriba, mostrar el contenido en el <p>.*/
var input = document.querySelector("#name");
var text = document.querySelector("#preview");
input === null || input === void 0
  ? void 0
  : input.addEventListener("change", function (e) {
      var input = e.target;
      text.textContent = input.value;
    });
/*Ejercicio 2: Contador*/
/*Ejercicio 2: Contador*/
var message = document.querySelector("#message");
var counter = document.querySelector("#counter");
message.addEventListener("input", function (e) {
  var message = e.target;
  counter.textContent = message.value.length.toString();
});
/*Ejercicio 3: Mostrar el texto en mayúsculas mientras escribe.*/
var texto = document.querySelector("#text");
var result = document.querySelector("#result");
texto.addEventListener("input", function (e) {
  var texto = e.target;
  result.textContent = texto.value.toUpperCase();
});
/*Ejercicio 4: Mostrar el texto en mayúsculas mientras escribe.*/
var color = document.querySelector("#color");
var box = document.querySelector("#box");
color.addEventListener("change", function (e) {
  var color = e.target;
  if (color.value === "red") {
    box.style.backgroundColor = "red";
  } else if (color.value === "blue") {
    box.style.backgroundColor = "blue";
  } else {
    box.style.backgroundColor = "green";
  }
});
/*Ejercicio 5: El botón sólo debe activarse cuando el checkbox esté marcado.*/
var check = document.querySelector("#terms");
var boton = document.querySelector(".boton");
check.addEventListener("change", function (e) {
  var checkBox = e.target;
  if (checkBox.checked) {
    boton.disabled = false;
  } else {
    boton.disabled = true;
  }
});
/*Ejercicio 6 y 7: Campo obligatorio y longitug minima*/
var nameObligatorio = document.querySelector("#nameObligatorio");
var info = document.querySelector(".info");
if (nameObligatorio.value.length <= 0) {
  info.textContent = "Nombre requerido";
  info.style.color = "red";
}
nameObligatorio.addEventListener("input", function (e) {
  if (nameObligatorio.value.length >= 5) {
    info.style.display = "none";
  } else {
    info.style.display = "block";
    info.textContent =
      "Nombre requerido, debe contener un minimo de 5 caracteres";
    info.style.color = "red";
  }
});
/*Ejercicio 8:Validar email mediante regex.*/
var email = document.querySelector("#email");
var infoMail = document.querySelector(".infoMail");
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (emailRegex.test(email.value)) {
  infoMail.textContent = "Email Valido";
  infoMail.style.color = "green";
} else {
  infoMail.textContent = "Email Invalido";
  infoMail.style.color = "red";
}
email.addEventListener("input", function (e) {
  if (emailRegex.test(email.value)) {
    infoMail.textContent = "Email Valido";
    infoMail.style.color = "green";
  } else {
    infoMail.textContent = "Email Invalido";
    infoMail.style.color = "red";
  }
});
/*Ejercicio 9:Login */
var form = document.querySelector("#miForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var formData = new FormData(form);
  var data = {};
  formData.forEach(function (value, key) {
    data[key] = value;
  });
  console.log(data);
});
/*Ejercicio 10:Singup */
var nameRequired = document.querySelector("#nameForm-2");
var spanName = document.querySelector(".spanName");
var spanEmail = document.querySelector(".spanEmail");
var spanPassword = document.querySelector(".spanPassword");
var spanConfirmPassword = document.querySelector(".spanConfirmPassword");
var emailRequired = document.querySelector("#emailForm-2");
var passwordRequired = document.querySelector("#password-2");
var passwordConfirmed = document.querySelector("#confirmPassword-2");
var emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var form2 = document.querySelector("#miForm-2");
var submitButton = document.querySelector("#submitButton");
function validateName(length) {
  if (length < 3) {
    spanName.style.display = "block";
    spanName.textContent = "Nombre Obligatorio";
    spanName.style.color = "red";
    return false;
  } else {
    spanName.style.display = "none";
    return true;
  }
}
function validateEmail(email) {
  if (emailRegex2.test(email)) {
    spanEmail.textContent = "Email Valido";
    spanEmail.style.color = "green";
    return true;
  } else {
    spanEmail.textContent = "Email Invalido";
    spanEmail.style.color = "red";
    return false;
  }
}
function validatePassWord(password) {
  if (password.length < 8) {
    spanPassword.textContent =
      "La contraseña debe contener minimo 8 caracteres";
    spanPassword.style.color = "red";
    return false;
  } else {
    spanPassword.textContent = "Valida";
    spanPassword.style.color = "green";
    return true;
  }
}
function confirmPassWord(password, confirmPassWord) {
  if (password === confirmPassWord) {
    spanConfirmPassword.textContent = "Valida";
    spanConfirmPassword.style.color = "green";
    return true;
  } else {
    spanConfirmPassword.textContent = "La contraseña no coincide";
    spanConfirmPassword.style.color = "red";
    return false;
  }
}
function buttonState() {
  var isNameValid = validateName(nameRequired.value.length);
  var isEmailValid = validateEmail(emailRequired.value);
  var isPasswordValid = validatePassWord(passwordRequired.value);
  var isConfirmValid = confirmPassWord(
    passwordRequired.value,
    passwordConfirmed.value,
  );
  submitButton.disabled = !(
    isNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmValid
  );
}
form2.addEventListener("input", function (e) {
  var target = e.target;
  if (target.name === "nameForm-2") {
    validateName(target.value.length);
  } else if (target.name === "emailForm-2") {
    validateEmail(target.value);
  } else if (target.name === "password-2") {
    validatePassWord(target.value);
  } else if (target.name === "confirmPassword-2") {
    confirmPassWord(passwordRequired.value, target.value);
  }
  buttonState();
});
