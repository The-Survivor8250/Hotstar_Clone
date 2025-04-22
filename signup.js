document.addEventListener("DOMContentLoaded", () => {

    // Password validation function
    function isValidPassword(password) {
        if (password.length < 8) {
            return false;
        }

        let hasNumber = false;

        for (let i = 0; i < password.length; i++) {
            if (!isNaN(password[i]) && password[i] !== ' ') {
                hasNumber = true;
                break;
            }
        }

        return hasNumber;
    }

    document.getElementById("signupForm").onsubmit = (event) => {
        event.preventDefault();

        let username = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (!isValidPassword(password)) {
            alert("Password must be at least 8 characters long and include at least one number.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        localStorage.setItem("email", username);
        localStorage.setItem("password", password);

        alert("Registration successful!");
        window.location.href = "/login.html"; // Redirect to login page
    };
});
