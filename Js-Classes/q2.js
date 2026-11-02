```javascript
// Q2: Student Form Validator using RegExp

// Select the form and input fields
const studentForm = document.getElementById("studentForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const successMessage = document.getElementById("successMessage");

// Regular expressions for validation
const namePattern = /^[A-Za-z]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{10}$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/;

// Function to validate an input field
function validateField(input, pattern, errorId, errorMessage) {
    const value = input.value.trim();
    const errorElement = document.getElementById(errorId);

    if (pattern.test(value)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        errorElement.textContent = "";
        return true;
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        errorElement.textContent = errorMessage;
        return false;
    }
}

// Validate the complete form when submitted
studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Validate each field
    const isNameValid = validateField(
        nameInput,
        namePattern,
        "nameError",
        "Name must contain only alphabets."
    );

    const isEmailValid = validateField(
        emailInput,
        emailPattern,
        "emailError",
        "Enter a valid email, e.g. example@domain.com."
    );

    const isPhoneValid = validateField(
        phoneInput,
        phonePattern,
        "phoneError",
        "Phone number must contain exactly 10 digits."
    );

    const isPasswordValid = validateField(
        passwordInput,
        passwordPattern,
        "passwordError",
        "Password needs an uppercase letter, a number and a special character."
    );

    // Display success message if every field is valid
    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
        successMessage.textContent = "Registration successful!";
    } else {
        successMessage.textContent = "";
    }
});
```