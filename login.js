document.getElementById("loginForm").onsubmit = (event) => {
    event.preventDefault(); // stop form from submitting normally

    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedUsername = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    const errorMsg = document.getElementById("error-message");

    if (!storedUsername || !storedPassword) {
        alert("No user found. Please sign up first.");
        window.location.href = "signin.html";
        return;
    }

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "/index.html";
    } else {
        errorMsg.innerText = "Invalid email or password!";
    }
};
