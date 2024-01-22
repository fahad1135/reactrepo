const form = document.getElementById("signupForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});
function formValidation() {
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  let isValid = true;
  if (name.value.trim() === "") {
    displayError("Name is Required", nameError, name);

    isValid = false;
  }
  if (!isValidEmail(email.value.trim())) {
    displayError(
      "Email is required and must contain a '@' sign.",
      emailError,
      email
    );
    isValid = false;
  }
  if (password.value.trim().length < 8) {
    displayError("Password Must be 8 Character", passwordError, password);
    isValid = false;
  }
  if (isValid) {
    successMessage.innerHTML = "Registration successful 🙂";
    successMessage.style.color = "green";
    successMessage.style.textAlign = "center";
    successMessage.style.fontSize = "16px";
    successMessage.style.marginTop = "4px";
    form.reset();
    clearErrorStyling();
  }
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayError(message, errorElement, field) {
  errorElement.innerHTML = message;

  field.style.border = message ? "1px solid red" : "1px solid green";

  errorElement.style.color = message ? "red" : "green";
  errorElement.style.fontSize = message ? "14px" : "";
}
function clearErrorStyling() {
  name.style.border = "1px solid green";
  email.style.border = "1px solid green";
  password.style.border = "1px solid green";
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
}
