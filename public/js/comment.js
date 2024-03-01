// Function to handle form submission for creating a new comment
const commentFormHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get the value of the comment content input field and remove leading/trailing whitespace
    const comment_content = document.querySelector("#comment").value.trim();
    
    // Extract the post ID from the current URL
    const post_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    
    // Check if the comment content is not empty
    if (comment_content) {
      // Send a POST request to the server to create a new comment
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ post_id, comment_content }), // Send post ID and comment content in the request body
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
      });
    
      // If the request is successful (status code 200-299)
      if (response.ok) {
        // Reload the page to display the new comment
        document.location.reload();
      } else {
        // If the request is not successful, display an error message
        alert(response.statusText);
        // Show the comment form again for the user to try submitting the comment again
        document.querySelector("#comment-form").style.display = "block";
      }
    }
  };
  
  // Event listener to handle form submission when the comment form is submitted
  document
    .querySelector("#comment-form") // Select the comment form element
    .addEventListener("submit", commentFormHandler); // Add event listener for form submission
  