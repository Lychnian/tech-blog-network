// Import the Router module from Express.js
const router = require("express").Router();

// Import the Post, User, and Comment models
const { Post, User, Comment } = require("../models/");

// Import the withAuth middleware for authentication
const withAuth = require("../utils/auth");

// Route to get all posts for the homepage
router.get("/", async (req, res) => {
  try {
    // Retrieve all posts with associated user information
    const postData = await Post.findAll({
      include: [User], // Include the User model to get author information for each post
    });

    // Convert retrieved post data to plain JavaScript objects
    const posts = postData.map((post) => post.get({ plain: true }));

    // Render the 'homepage' template with the retrieved posts and logged_in status
    res.render("homepage", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    // If an error occurs, respond with a 500 status code and the error object in JSON format
    res.status(500).json(err);
  }
});

// Route to get a single post by its ID
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    // Find the post by its ID and include associated comments and user information
    const postData = await Post.findOne({
      where: {
        id: req.params.id, // Filter by post ID from request parameters
      },
      include: [
        {
          model: Comment, // Include comments associated with the post
          include: {
            model: User, // Include the user who authored each comment
            attributes: ["username"], // Specify attributes to include (only username)
          },
        },
        {
          model: User, // Include the user who authored the post
          attributes: ["username"], // Specify attributes to include (only username)
        },
      ],
    });

    // If the post is found, render the 'postbyuserid' template with the post data
    if (postData) {
      const post = postData.get({ plain: true });
      res.render("postbyuserid", { post, logged_in: req.session.logged_in });
    } else {
      // If no post is found with the specified ID, respond with a 404 status code
      res.status(404).end();
    }
  } catch (err) {
    // If an error occurs, respond with a 500 status code and the error object in JSON format
    res.status(500).json(err);
  }
});

// Route to render the 'login' template for logging in or signing up
router.get("/login", (req, res) => {
  res.render("login");
});

// Export the router for use in other parts of the application
module.exports = router;
