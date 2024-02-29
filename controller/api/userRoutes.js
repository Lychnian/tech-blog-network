// Import the Router module from Express.js
const router = require("express").Router();

// Import the User model
const { User } = require("../../models");

// Route for user signup
router.post("/", async (req, res) => {
  try {
    // Create a new user with username and password from request body
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    // Save user information in session and set logged_in status to true
    req.session.save(() => {
      req.session.user_id = newUser.id; // Save user ID in session
      req.session.username = newUser.username; // Save username in session
      req.session.logged_in = true; // Set logged_in status to true

      // Respond with the newly created user in JSON format
      res.status(200).json(newUser);
    });
  } catch (err) {
    // If an error occurs during user creation, log the error and respond with a 500 status code and the error object in JSON format
    console.log(err);
    res.status(500).json(err);
  }
});

// Route for user login
router.post("/login", async (req, res) => {
  try {
    // Find a user with the provided username
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    // If no user is found with the provided username, respond with a 400 status code and a message indicating no user found
    if (!user) {
      res.status(400).json({ message: "No user found!" });
      return;
    }

    // Check if the provided password matches the user's password
    const validPassword = user.checkPassword(req.body.password);

    // If the password is invalid, respond with a 400 status code and a message indicating no user found
    if (!validPassword) {
      res.status(400).json({ message: "No user found!" });
      return;
    }

    // If login is successful, save user information in session and set logged_in status to true
    req.session.save(() => {
      req.session.user_id = user.id; // Save user ID in session
      req.session.username = user.username; // Save username in session
      req.session.logged_in = true; // Set logged_in status to true

      // Respond with the user object and a success message in JSON format
      res.json({ user, message: "You are now logged in!" });
    });
  } catch (err) {
    // If an error occurs during login, respond with a 400 status code and a message indicating no user found
    res.status(400).json({ message: "No user found!" });
  }
});

// Route for user logout
router.post("/logout", (req, res) => {
  // If the user is logged in, destroy the session and log them out
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end(); // Respond with a 204 status code (No Content) to indicate successful logout
    });
  } else {
    // If the user is not logged in, respond with a 404 status code (Not Found) to indicate no active session
    res.status(404).end();
  }
});

// Export the router for use in other parts of the application
module.exports = router;
