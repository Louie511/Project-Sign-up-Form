// TOGGLE PASSWORD BUTTON

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-password");
    const passwordField = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm_password");
    const toggleIcon = toggleButton.querySelector("img");

    toggleButton.addEventListener("click", function() {
        const isPasswordVisible = passwordField.type === "text";

        passwordField.type = isPasswordVisible ? "password" : "text";
        confirmPassword.type = isPasswordVisible ? "password" : "text";
        toggleIcon.src = isPasswordVisible ? "./assets/images/eyebrow.png" : "./assets/images/visible-opened-eye-interface-option.png";
    });
});

// TOGGLE THEME

function toggleTheme() {
    const icon = document.querySelector(".themeIcon");
    const root = document.documentElement;

    if (root.classList.contains("dark")) {
        root.classList.remove("dark");
        root.classList.add("light");
        icon.src = "./assets/images/up-arrow.png";
    }else {
        root.classList.remove("light")
        root.classList.add("dark");
        icon.src = "./assets/images/yield.png";
    }
}

document.querySelector(".themes").addEventListener("click", toggleTheme);

// ERROR CLEANING FUNCTIONALITY

function clearError(event) {
    const field = fields.find(function(f) {
        return f.element === event.target;
    });

    if (field) {
        field.errorElement.textContent = "";
    }
}

// DEFINE INPUT FIELDS AND THEIR CORRESPONDING ERROR MESSAGE ELEMENTS

const fields = [
    {element: document.getElementById("first_name"), errorElement: document.getElementById("fName-error") },
    {element: document.getElementById("last_name"), errorElement: document.getElementById("lName-error") },
    {element: document.getElementById("email"), errorElement: document.getElementById("email-error") },
    {element: document.getElementById("number"), errorElement: document.getElementById("phone-error") },
    {element: document.getElementById("password"), errorElement: document.getElementById("psw-error-message") },
    {element: document.getElementById("confirm_password"), errorElement: document.getElementById("psw-confirm-message") }, 
]

// ATTACH EVENT LISTENERS TO CLEAR ERROR MESSAGES ON FOCUS OR INPUT CHANGE

fields.forEach(field => {
    field.element.addEventListener("focus", clearError);
    field.element.addEventListener("input", clearError);
})

// FORM SUBMISSION VALIDATION 

document.querySelector("form").addEventListener("submit", function(e){

    const fName = document.getElementById("first_name").value.trim();
    let fNameError = document.getElementById("fName-error");

    const lName = document.getElementById("last_name").value.trim();
    let lNameError = document.getElementById("lName-error");

    const eAddress = document.getElementById("email").value.trim();
    let emailError = document.getElementById("email-error");
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    const phoneInput = document.getElementById("number").value.trim();
    const phonePattern = /^(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{0,9}$/;
    let phoneErrorMessage = document.getElementById("phone-error");

    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm_password").value.trim();
    let pswConfirmMessage = document.getElementById("psw-confirm-message");
    let pswError = document.getElementById("psw-error-message");

    let isValid = true;
    

// FIRST NAME VALIDATION

    if (fName === "" ){
        fNameError.textContent = "Please enter your first name:";
        isValid = false;
    }else {
        fNameError.textContent = "";
    }

// LAST NAME VALIDATION  
    if (lName === "") {
        lNameError.textContent = "Please enter your last name:";
        isValid = false;
    }else {
        lNameError.textContent = "";
    }

// EMAIL VALIDATION
    if (eAddress === "") {
        emailError.textContent = "Please enter an email address";
        isValid = false;
    } else if (!emailPattern.test(eAddress)) {
        emailError.textContent = "Please enter a valid email";
        isValid = false;
    }else {
        emailError.textContent = "";
    }

// PHONE NUMBER VALIDATION
    if (!phonePattern.test(phoneInput)) {
        phoneErrorMessage.textContent = "Enter a valid number"
        isValid = false;
    }else {
        phoneErrorMessage.textContent = "";
    }

// PASSWORD VALIDATION 
    if (password === "") {
        pswError.textContent = "Please create a password.";
        isValid = false;
    }else {
        pswError.textContent = "";
    }

// CONFIRM PASSWORD VALIDATION 
    if (password !== confirmPassword){
        pswConfirmMessage.textContent = "Passwords do not match!";
        isValid = false;
    }else {
        pswConfirmMessage.textContent = "";
    }
    
// PREVENT SUBMISSION IF VALIDATION FAILS
    if (!isValid) {
        e.preventDefault();
    }else {
        alert("Form is valid for submitting");
    }

});



