// Function to handle form submission for deleting a post
const deleteFormHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Extract the post ID from the current URL
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    
    // Log the post ID to the console for debugging purposes
    console.log(id);
    
    // Send a DELETE request to the server to delete the post with the specified ID
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE", // Specify DELETE method
      body: JSON.stringify({
        post_id: id, // Send the post ID in the request body
      }),
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
      },
    });
    
    // If the request is successful (status code 200-299)
    if (response.ok) {
      // Redirect the user to the blog page after successful deletion
      document.location.replace("/blog/");
    } else {
      // If the request is not successful, display an error message
      alert(response.statusText);
    }
};
  
  // Add event listener to delete button to handle form submission
  document.querySelector("#delete").addEventListener("click", deleteFormHandler);
  