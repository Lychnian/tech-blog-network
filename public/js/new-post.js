// Function to handle form submission for creating a new post
const newFormHandler = async (event) => {
    event.preventDefault();

    // Get the values of the title and content fields from the new post form
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#content").value.trim();

    // Send a POST request to the server to create a new post
    const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
    });

    // If the response is successful, redirect the user to the blog page
    if (response.ok) {
        document.location.replace("/blog");
    } else {
        // If there's an error, display the error message
        alert(response.statusText);
    }
};

// Add event listener to the new post form
document.querySelector("#new-post-form").addEventListener("submit", newFormHandler);
