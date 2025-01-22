const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');
const submitButton = document.getElementById('submitButton');
const signupForm = document.getElementById('signupForm');
const eye = document.querySelector(".fa-eye");
const eyeSlash = document.querySelector(".fa-eye-slash");

let isEmailValid = false;
let isPasswordValid = false;

// Email validation
emailInput.addEventListener('change', () => {
    const emailValue = emailInput.value.trim();
    if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
        emailError.style.display = 'none';
        isEmailValid = true;
    } else {
        emailError.style.display = 'block';
        isEmailValid = false;
    }
    checkFormValidity();
});


passwordInput.addEventListener('change', () => {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length >= 8) {
        passwordError.style.display = 'none';
        isPasswordValid = true;
    } else {
        passwordError.style.display = 'block';
        isPasswordValid = false;
    }
    checkFormValidity();
});

// Check if form is valid
function checkFormValidity() {
    if (isEmailValid && isPasswordValid) {
        successMessage.style.display = 'block';
        submitButton.disabled = false;
    } else {
        successMessage.style.display = 'none';
        submitButton.disabled = true;
    }
}

// Handle form submission
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const confirmation = confirm('Are you sure you want to sign up?');
    if (confirmation) {
        alert('Successful signup!');
        signupForm.reset();
        resetFormState();
    } else {
        location.reload();
    }
});

// show password
eye.addEventListener("click", (event) => {
    event.preventDefault();
    passwordInput.setAttribute("type", "text");
    eye.style.display = "none";
    eyeSlash.style.display = "block"
});

// hide Password
eyeSlash.addEventListener("click", (event) => {
    event.preventDefault();
    passwordInput.setAttribute("type", "password");
    eyeSlash.style.display = "none";
    eye.style.display = "block"
});

// Reset form state
function resetFormState() {
    isEmailValid = false;
    isPasswordValid = false;
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    successMessage.style.display = 'none';
    submitButton.disabled = true;
}
