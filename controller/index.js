// Import the Router module from Express.js
const router = require("express").Router();

// Import the API routes from the 'api' directory
const apiRoutes = require("./api");

// Import the home routes from the 'homeRoutes.js' file
const homeRoutes = require("./homeRoutes.js");

// Import the blog routes from the 'blogRoutes.js' file
const blogRoutes = require("./blogRoutes.js");

// Use the API routes for requests starting with '/api'
router.use("/api", apiRoutes);

// Use the home routes for requests starting with the root '/'
router.use("/", homeRoutes);

// Use the blog routes for requests starting with '/blog'
router.use("/blog", blogRoutes);

// Export the router to be used in other parts of the application
module.exports = router;
