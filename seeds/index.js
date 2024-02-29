// Importing the Sequelize connection instance
const sequelize = require("../config/connection");

// Importing seed data functions for users, posts, and comments
const seedUser = require("./userData");
const seedPost = require("./postData");
const seedComments = require("./commentData");

// Function to seed all data into the database
const seedAll = async () => {
  // Syncing the database, dropping existing tables and re-creating them
  await sequelize.sync({ force: true });
  console.log("\n----- Database Synced -----\n");

  // Seeding user data into the database
  await seedUser();
  console.log("\n----- User Seeded -----\n");

  // Seeding post data into the database
  await seedPost();
  console.log("\n----- Post Seeded -----\n");

  // Seeding comment data into the database
  await seedComments();
  console.log("\n----- Comment Seeded -----\n");

  // Exiting the process after seeding is complete
  process.exit(0);
};

// Calling the function to seed all data
seedAll();
