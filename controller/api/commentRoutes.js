// Import the Router module from Express.js
const router = require("express").Router();

// Import the Comment model
const { Comment } = require("../../models");

// Import the withAuth middleware for authentication
const withAuth = require("../../utils/auth");

// Route for creating a new comment
router.post("/", withAuth, async (req, res) => {
  try {
    // Create a new comment using data from the request body and the authenticated user's session
    const newComment = await Comment.create({
      comment_content: req.body.comment_content, // Comment content from request body
      post_id: req.body.post_id, // Post ID from request body
      user_id: req.session.user_id, // User ID from session (authenticated user)
    });
    
    // Respond with the newly created comment object in JSON format
    res.json(newComment);
  } catch (err) {
    // If an error occurs, respond with a 500 status code and the error object in JSON format
    res.status(500).json(err);
  }
});

// Export the router for use in other parts of the application
module.exports = router;
