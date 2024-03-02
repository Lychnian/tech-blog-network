// Import required modules
const path = require('path'); // For handling file paths
const express = require('express'); // Express.js framework for Node.js
const session = require('express-session'); // Session middleware for Express.js
const exphbs = require('express-handlebars'); // Handlebars.js view engine for Express.js
const routes = require('./controller'); // Importing routes from controller directory
const helpers = require('./utils/helpers'); // Custom helpers functions

// Import Sequelize connection and session store
const sequelize = require('./config/connection'); // Sequelize connection
const SequelizeStore = require('connect-session-sequelize')(session.Store); // Session store for Sequelize

// Create Express application
const app = express();
const PORT = process.env.PORT || 3001; // Define port number

// Set up session configuration
const sess = {
	secret: 'Super secret secret', // Secret key for session
	cookie: {
		maxAge: 300000, // Session duration in milliseconds (5 minutes)
		httpOnly: true, // Restrict cookie access from client-side JavaScript
		secure: false, // Set to true in production to enable secure cookies over HTTPS
		sameSite: 'strict', // Protect against CSRF attacks
	},
	resave: false, // Prevents session data from being resaved to the session store if no changes are made
	saveUninitialized: true, // Save session data even if no data has been set
	store: new SequelizeStore({
		db: sequelize, // Sequelize connection instance
	}),
};

// Use session middleware with defined configuration
app.use(session(sess));

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine); // Set Handlebars.js as the view engine
app.set('view engine', 'handlebars'); // Set view engine for rendering templates

// Middleware for parsing JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use defined routes
app.use(routes);

// Sync Sequelize models with the database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`)); // Start server
});
