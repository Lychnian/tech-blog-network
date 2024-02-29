// Seed data for comments table

const { Comment } = require("../models");

// Comment data to be seeded into the database
const commentData = [
    {
      "comment_content": "Great intro to Node.js! Can you recommend any advanced topics to dive into?",
      "post_id": 1,
      "user_id": 2,
    },
    {
      "comment_content": "I've been using MySQL for a while now. Do you have any tips for optimizing queries?",
      "post_id": 2,
      "user_id": 8,
    },
    {
      "comment_content": "What are the benefits of using MVC in Node.js development?",
      "post_id": 3,
      "user_id": 6,
    },
    {
      "comment_content": "I'd love to take a step-by-step tutorial on building a full-stack app with MERN!",
      "post_id": 4,
      "user_id": 1,
    },
    {
      "comment_content": "Can you explain the concept of callback hell in Node.js and how to avoid it?",
      "post_id": 5,
      "user_id": 9,
    },
    {
      "comment_content": "I'm struggling with database indexing in MySQL. Any recommendations for resources?",
      "post_id": 6,
      "user_id": 7,
    },
    {
      "comment_content": "What's your favorite MVC framework for Node.js development?",
      "post_id": 7,
      "user_id": 10,
    },
    {
      "comment_content": "As a beginner, which programming languages should I learn for web development?",
      "post_id": 8,
      "user_id": 3,
    },
    {
      "comment_content": "Do you have any recommendations for staying up-to-date with web development trends?",
      "post_id": 9,
      "user_id": 4,
    },
    {
      "comment_content": "I'm impressed with your coding tips! Can you share more about code optimization?",
      "post_id": 10,
      "user_id": 5,
    },
  ];

// Function to seed comments data into the database
const seedComments = () => Comment.bulkCreate(commentData);

// Exporting the function to seed comments data
module.exports = seedComments;
