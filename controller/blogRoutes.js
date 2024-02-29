// Import the Router module from Express.js
const router = require("express").Router();

// Import the Post, User, and Comment models
const { Post, User, Comment } = require("../models");

// Import the withAuth middleware for authentication
const withAuth = require("../utils/auth");

// Route to get all posts for the current user
router.get("/", withAuth, async (req, res) => {
  try {
    // Retrieve all posts where the current user is the author
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id, // Filter posts by user ID from session
      },
      include: [
        {
          model: Comment, // Include comments associated with each post
          include: {
            model: User, // Include the user who authored each comment
            attributes: ["username"], // Specify attributes to include (only username)
          },
        },
        {
          model: User, // Include the user who authored each post
          attributes: ["username"], // Specify attributes to include (only username)
        },
      ],
    });

    // Convert retrieved post data to plain JavaScript objects
    const posts = postData.map((post) => post.get({ plain: true }));

    // Render the 'blog' template with the retrieved posts and logged_in status
    res.render("blog", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    // If an error occurs, redirect to the homepage
    res.redirect("/");
  }
});

// Route to render the 'new-post' template when creating a new post
router.get("/new", (req, res) => {
  res.render("new-post");
});

// Route to render the 'edit-post' template for editing a post
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    // Find the post by its ID
    const postData = await Post.findByPk(req.params.id);

    // If the post is found, render the 'edit-post' template with the post data
    if (postData) {
      const post = postData.get({ plain: true });
      res.render("edit-post", { post });
    } else {
      // If no post is found with the specified ID, respond with a 404 status code
      res.status(404).end();
    }
  } catch (err) {
    // If an error occurs, redirect to the login page
    res.redirect("login");
  }
});

// Export the router for use in other parts of the application
module.exports = router;
