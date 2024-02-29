// This middleware function checks whether the user is authenticated

// Middleware function withAuth
// withAuth function takes three parameters: req (request), res (response), and next (callback function)
const withAuth = (req, res, next) => {
    // If the user is not logged in (session does not have a logged_in property), redirect the user to the login route
    if (!req.session.logged_in) {
        // Redirecting to the login route
        res.redirect("/login");
    } else {
        // If the user is logged in, call the next middleware function in the stack
        next();
    }
  };
  
  // Exporting the withAuth middleware function to be used in other parts of the application
  module.exports = withAuth;
  