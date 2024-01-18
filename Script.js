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
  successMessage.innerHTML = "";

  let isValid = true;

  if (name.value.trim() === "") {
    displayError("Name is required.", nameError, name);
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
    displayError(
      "Password must have at least 8 characters.",
      passwordError,
      password
    );
    isValid = false;
  }

  if (isValid) {
    successMessage.innerHTML = "Registration successful 🙂";
    form.reset();
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayError(message, errorElement, field) {
  errorElement.innerHTML = message;
  field.style.border = message ? "1px solid red" : "1px solid green";
}
