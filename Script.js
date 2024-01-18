const form = document.getElementById("signupForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

function formValidation() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  errorMessage.innerHTML = "";
  successMessage.innerHTML = "";

  let isValid = true;
  if (nameValue === "") {
    displayError("Name is required.", name);
    isValid = false;
  }

  if (!isValidEmail(emailValue)) {
    displayError("Email is required and must contain a '@' sign.", email);
    isValid = false;
  }

  if (passwordValue.length < 8) {
    displayError("Password must have at least 8 characters.", password);
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

function displayError(message, field) {
  errorMessage.innerHTML = errorMessage.innerHTML + `<p>${message}</p>`;

  field.style.border = "1px solid red";
}
