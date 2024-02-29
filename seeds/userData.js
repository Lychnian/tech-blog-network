// Importing the User model from the "../models" directory
const { User } = require("../models");

// Array containing sample user data
const userdata = [
  {
    "username": "devEnthusiast123",
    "password": "securePwd123"
  },
  {
    "username": "webDevGuru",
    "password": "pass1234"
  },
  {
    "username": "codeNinja42",
    "password": "strongPass789"
  },
  {
    "username": "fullstackPro",
    "password": "topSecretPwd"
  },
  {
    "username": "nodeJSlover",
    "password": "nodePass123"
  },
  {
    "username": "mysqlMaster",
    "password": "mysqlPwd567"
  },
  {
    "username": "mvcExpert",
    "password": "mvcPass321"
  },
  {
    "username": "webDevNovice",
    "password": "web123123"
  },
  {
    "username": "techEnthusiast",
    "password": "techPwd432"
  },
  {
    "username": "codingWhiz",
    "password": "codingPass789"
  },
];

// Function to seed the User table with sample user data
const seedUser = () =>
  // Using the User model to bulk create users in the database
  User.bulkCreate(userdata, {
    // Using individualHooks option to trigger any hooks defined on the User model
    individualHooks: true,
  });

// Exporting the seedUser function to be used in other parts of the application
module.exports = seedUser;
