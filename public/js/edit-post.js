// Function to handle form submission for editing a post
const editFormHandler = async (event) => {
    event.preventDefault();

    // Get the values of the title and content fields from the form
    const title = document.querySelector("#title").value.trim();
    const content = document.querySelector("#content").value.trim();

    // Extract the post ID from the URL
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    // Send a PUT request to the server to update the post with the new title and content
    const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ post_id: id, title, content }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    // If the response is successful, redirect the user to the blog page
    if (response.ok) {
        document.location.replace("/blog/");
    } else {
        // If there's an error, display the error message
        alert(response.statusText);
    }
};

// Add an event listener to the "Update" button to trigger the editFormHandler function when clicked
document.querySelector("#update").addEventListener("click", editFormHandler);
