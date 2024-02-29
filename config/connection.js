// Import the Sequelize library
const Sequelize = require('sequelize');
// Load environment variables from .env file
require('dotenv').config();

let sequelize; // Declare sequelize variable

// Check if JAWSDB_URL environment variable is set (indicating Heroku deployment)
if (process.env.JAWSDB_URL) {
  // If JAWSDB_URL is set, create a Sequelize connection using the provided URL
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // If JAWSDB_URL is not set (indicating local development), create a Sequelize connection with local database credentials
  sequelize = new Sequelize(
    process.env.DB_NAME,     // Database name
    process.env.DB_USER,     // Database username
    process.env.DB_PASSWORD, // Database password
    {
      host: 'localhost',     // Database host
      dialect: 'mysql',      // MySQL dialect
      port: 3306             // MySQL port number
    }
  );
}

// Export the sequelize connection instance
module.exports = sequelize;
