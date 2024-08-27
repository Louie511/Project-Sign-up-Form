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

// CONFIRM BUTTON CHECKS

document.querySelector("form").addEventListener("submit", function(e){

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    let pswErrorMessage = document.getElementById("psw-error-message");

    if  (password !== confirmPassword) {
        e.preventDefault();
        pswErrorMessage.textContent = "Passwords do not match!"
        return;
    }

    const phoneInput = document.getElementById("number").value;
    const phonePattern = /^(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{0,9}$/;
    let errorMessage = document.getElementById("error-message");

    if (!phonePattern.test(phoneInput)) {
        e.preventDefault();
        errorMessage.textContent = "Enter a valid number"
        return;
    }else {
        errorMessage.textContent = "";
    }

    alert("Form is valid for submitting")
});

