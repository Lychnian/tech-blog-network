// Function to handle logout
const logout = async (event) => {
    event.preventDefault();

    // Send a POST request to the server to logout the user
    const response = await fetch("/api/users/logout", {
        method: "post",
        headers: { "Content-Type": "application/json" },
    });

    // If the response is successful, redirect the user to the home page
    if (response.ok) {
        document.location.replace("/");
    } else {
        // If there's an error, display the error message
        alert(response.statusText);
    }
};

// Add event listener to the logout button
document.querySelector("#logout").addEventListener("click", logout);
