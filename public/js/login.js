// Function to handle form submission for logging in
const loginFormHandler = async (event) => {
    event.preventDefault();

    // Get the values of the username and password fields from the login form
    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    // If both username and password are provided
    if (username && password) {
        // Send a POST request to the server to log in the user
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });

        // If the response is successful, redirect the user to the blog page
        if (response.ok) {
            document.location.replace("/blog/");
        } else {
            // If there's an error, display the error message
            alert(response.statusText);
        }
    }
};

// Function to handle form submission for signing up
const signupFormHandler = async (event) => {
    event.preventDefault();

    // Get the values of the username and password fields from the signup form
    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    // If both username and password are provided
    if (username && password) {
        // Send a POST request to the server to create a new user
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });

        // If the response is successful, redirect the user to the blog page
        if (response.ok) {
            document.location.replace("/blog/");
        } else {
            // If there's an error, display the error message
            alert(response.statusText);
        }
    }
};

// Add event listeners to the login and signup forms
document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
