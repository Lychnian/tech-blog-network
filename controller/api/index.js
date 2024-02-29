// Import the Router module from Express.js
const router = require("express").Router();

// Import the userRoutes, postRoutes, and commentRoutes modules
const userRoutes = require("./userRoutes.js"); // Routes related to users
const postRoutes = require("./postRoutes.js"); // Routes related to posts
const commentRoutes = require("./commentRoutes.js"); // Routes related to comments

// Middleware to handle routes related to users
router.use("/users", userRoutes);

// Middleware to handle routes related to posts
router.use("/posts", postRoutes);

// Middleware to handle routes related to comments
router.use("/comments", commentRoutes);

// Export the router for use in other parts of the application
module.exports = router;
