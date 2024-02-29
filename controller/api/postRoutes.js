// Import the Router module from Express.js
const router = require("express").Router();

// Import the Post model
const { Post } = require("../../models");

// Import the Sequelize connection
const sequelize = require("../../config/connection");

// Import the withAuth middleware for authentication
const withAuth = require("../../utils/auth");

// Route for creating a new post
router.post("/", withAuth, async (req, res) => {
  try {
    // Create a new post using data from the request body and the authenticated user's session
    const newPost = await Post.create({
      title: req.body.title,       // Title of the post from request body
      content: req.body.content,   // Content of the post from request body
      user_id: req.session.user_id // User ID from session (authenticated user)
    });

    // Log the newly created post to the console
    console.log("New post: ", newPost);

    // Respond with the newly created post object in JSON format
    res.json(newPost);
  } catch (err) {
    // If an error occurs during the creation of the post, log the error to the console and respond with a 500 status code and the error object in JSON format
    console.log("Post failed!", err);
    res.status(500).json(err);
  }
});

// Route for updating an existing post
router.put("/:id", withAuth, async (req, res) => {
  try {
    // Update the post with the specified ID using data from the request body
    const updatePost = await Post.update(req.body, {
      where: {
        id: req.params.id // Post ID from request parameters
      }
    });

    // If the post is successfully updated, respond with a 200 status code and the updated post object in JSON format
    if (updatePost) {
      res.status(200).json(updatePost);
    } else {
      // If no post is found with the specified ID, respond with a 404 status code and a message indicating no post was found
      res.status(404).json({ message: "No post found with this id!" });
    }
  } catch (err) {
    // If an error occurs during the update process, respond with a 500 status code and the error object in JSON format
    res.status(500).json(err);
  }
});

// Route for deleting an existing post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    // Delete the post with the specified ID
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id // Post ID from request parameters
      }
    });

    // If the post is successfully deleted, respond with a 200 status code
    if (deletePost) {
      res.status(200).json(deletePost);
    } else {
      // If no post is found with the specified ID, respond with a 404 status code and a message indicating no post was found
      res.status(404).json({ message: "No post found for this id!" });
    }
  } catch (err) {
    // If an error occurs during the deletion process, respond with a 500 status code and the error object in JSON format
    res.status(500).json(err);
  }
});

// Export the router for use in other parts of the application
module.exports = router;
