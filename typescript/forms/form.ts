// Practica de formularios y eventos

/* Ejercicio 1 - Live Name
Objetivo: Cada vez que el usuario escriba, mostrar el contenido en el <p>.*/
let input = document.querySelector("#name") as HTMLInputElement;
let text = document.querySelector("#preview") as HTMLParagraphElement;
input?.addEventListener("change", (e) => {
  const input = e.target as HTMLInputElement;
  text.textContent = input.value;
});

export {};

/*Ejercicio 2: Contador*/

/*Ejercicio 2: Contador*/
let message = document.querySelector("#message") as HTMLTextAreaElement;
let counter = document.querySelector("#counter") as HTMLSpanElement;

message.addEventListener("input", (e) => {
  const message = e.target as HTMLTextAreaElement;
  counter.textContent = message.value.length.toString();
});

/*Ejercicio 3: Mostrar el texto en mayúsculas mientras escribe.*/
let texto = document.querySelector("#text") as HTMLTextAreaElement;
let result = document.querySelector("#result") as HTMLSpanElement;

texto.addEventListener("input", (e) => {
  const texto = e.target as HTMLTextAreaElement;
  result.textContent = texto.value.toUpperCase();
});

/*Ejercicio 4: Mostrar el texto en mayúsculas mientras escribe.*/
let color = document.querySelector("#color") as HTMLSelectElement;
let box = document.querySelector("#box") as HTMLDivElement;

color.addEventListener("change", (e) => {
  const color = e.target as HTMLTextAreaElement;
  if (color.value === "red") {
    box.style.backgroundColor = "red";
  } else if (color.value === "blue") {
    box.style.backgroundColor = "blue";
  } else {
    box.style.backgroundColor = "green";
  }
});

/*Ejercicio 5: El botón sólo debe activarse cuando el checkbox esté marcado.*/
let check = document.querySelector("#terms") as HTMLSelectElement;
let boton = document.querySelector(".boton") as HTMLButtonElement;

check.addEventListener("change", (e) => {
  const checkBox = e.target as HTMLInputElement;
  if (checkBox.checked) {
    boton.disabled = false;
  } else {
    boton.disabled = true;
  }
});

/*Ejercicio 6 y 7: Campo obligatorio y longitug minima*/
let nameObligatorio = document.querySelector(
  "#nameObligatorio",
) as HTMLInputElement;
let info = document.querySelector(".info") as HTMLParagraphElement;
if (nameObligatorio.value.length <= 0) {
  info.textContent = "Nombre requerido";
  info.style.color = "red";
}

nameObligatorio.addEventListener("input", (e) => {
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
let email = document.querySelector("#email") as HTMLInputElement;
let infoMail = document.querySelector(".infoMail") as HTMLParagraphElement;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (emailRegex.test(email.value)) {
  infoMail.textContent = "Email Valido";
  infoMail.style.color = "green";
} else {
  infoMail.textContent = "Email Invalido";
  infoMail.style.color = "red";
}

email.addEventListener("input", (e) => {
  if (emailRegex.test(email.value)) {
    infoMail.textContent = "Email Valido";
    infoMail.style.color = "green";
  } else {
    infoMail.textContent = "Email Invalido";
    infoMail.style.color = "red";
  }
});

/*Ejercicio 9:Login */
let form = document.querySelector("#miForm") as HTMLFormElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data: Record<string, FormDataEntryValue> = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);
});

/*Ejercicio 10:Singup */
let nameRequired = document.querySelector("#nameForm-2") as HTMLInputElement;
let spanName = document.querySelector(".spanName") as HTMLInputElement;
let spanEmail = document.querySelector(".spanEmail") as HTMLInputElement;
let spanPassword = document.querySelector(".spanPassword") as HTMLInputElement;
let spanConfirmPassword = document.querySelector(
  ".spanConfirmPassword",
) as HTMLInputElement;
let emailRequired = document.querySelector("#emailForm-2") as HTMLInputElement;
let passwordRequired = document.querySelector(
  "#password-2",
) as HTMLInputElement;
let passwordConfirmed = document.querySelector(
  "#confirmPassword-2",
) as HTMLInputElement;
const emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let form2 = document.querySelector("#miForm-2") as HTMLFormElement;
const submitButton = document.querySelector(
  "#submitButton",
) as HTMLButtonElement;
function validateName(length: number) {
  if (length<3) {
    spanName.style.display = "block";
    spanName.textContent = "Nombre Obligatorio";
    spanName.style.color = "red";
    return false;
  } else {
    spanName.style.display = "none";
    return true;
  }
}
function validateEmail(email: string) {
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
function validatePassWord(password: string) {
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

function confirmPassWord(password: string, confirmPassWord: string) {
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
  const isNameValid = validateName(nameRequired.value.length);
  const isEmailValid = validateEmail(emailRequired.value);
  const isPasswordValid = validatePassWord(passwordRequired.value);
  const isConfirmValid = confirmPassWord(
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

form2.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
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
