// Importing the Post model from the "../models" directory
const { Post } = require("../models");

// Array containing sample post data
const postdata = [
  {
    "title": "Getting Started with Node.js",
    "content": "Node.js is a powerful runtime for building server-side applications. In this blog, we'll cover the basics of Node.js, setting up a server, and handling HTTP requests.",
    "user_id": 1
  },
  {
    "title": "MySQL Database Management",
    "content": "Learn how to work with MySQL, a popular relational database management system. We'll cover database setup, CRUD operations, and data modeling.",
    "user_id": 2
  },
  {
    "title": "MVC Architecture Explained",
    "content": "MVC (Model-View-Controller) is a fundamental design pattern in web development. Discover how MVC works and how to implement it in your Node.js applications.",
    "user_id": 3
  },
  {
    "title": "Building a Full-Stack App with MERN",
    "content": "In this comprehensive guide, we'll walk you through building a full-stack web application using Node.js, Express, React and MongoDB!",
    "user_id": 4
  },
  {
    "title": "Node.js Best Practices",
    "content": "Explore best practices and tips for writing clean and efficient Node.js code. We'll cover asynchronous programming, error handling, and more.",
    "user_id": 5
  },
  {
    "title": "Advanced MySQL Techniques",
    "content": "Delve into advanced techniques for optimizing MySQL databases. Topics include indexing, performance tuning, and database normalization.",
    "user_id": 6
  },
  {
    "title": "Mastering the MVC Framework",
    "content": "Become an MVC expert by learning advanced concepts and techniques for building scalable and maintainable web applications.",
    "user_id": 7
  },
  {
    "title": "Starting Your Web Dev Journey",
    "content": "If you're new to web development, this blog is for you! We'll provide guidance on where to begin, essential tools, and resources for your learning journey.",
    "user_id": 8
  },
  {
    "title": "Exploring the Latest Web Technologies",
    "content": "Stay updated with the latest trends and technologies in web development. We'll discuss topics like serverless architecture, progressive web apps, and more!",
    "user_id": 9
  },
  {
    "title": "Coding Tips and Tricks",
    "content": "Unlock the secrets of efficient coding with our tips and tricks. Whether you're a beginner or an experienced coder, there's something here for you.",
    "user_id": 10
  }
];

// Function to seed the Post table with sample post data
const seedPost = () =>
  // Using the Post model to bulk create posts in the database
  Post.bulkCreate(postdata);

// Exporting the seedPost function to be used in other parts of the application
module.exports = seedPost;
