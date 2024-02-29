// This module exports two functions for formatting time and date

// Function to format time
module.exports = {
    // format_time function takes a date object as input and returns a string representation of the time in the format HH:MM:SS (24-hour format)
    format_time: (date) => {
        // Using toLocaleTimeString method to convert the date object to a string representing the time portion
        return date.toLocaleTimeString();
    },
  
    // Function to format date
    // format_date function takes a date object as input and returns a string representation of the date in the format MM/DD/YYYY
    format_date: (date) => {
        // Creating a new Date object to manipulate and extract components of the date
        // Using getMonth(), getDate(), and getFullYear() methods to retrieve month, day, and year components respectively
        return `${new Date(date).getMonth() + 1}/${new Date
          (date).getDate()}/${new Date(date).getFullYear()}`;
    },
  };