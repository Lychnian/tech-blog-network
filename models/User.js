// Importing necessary modules from Sequelize
const { Model, DataTypes } = require("sequelize");
// Importing bcrypt for password hashing
const bcrypt = require("bcrypt");
// Importing the connection instance from the configuration file
const sequelize = require("../config/connection");

// Defining the User model by extending the Sequelize Model class
class User extends Model {
  // Method to validate password during login
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

// Initializing the User model with defined attributes and options
User.init(
  {
    // Defining the 'id' attribute
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Defining the 'username' attribute
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // Defining the 'password' attribute with validation for minimum length
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  // Passing the connection instance and other options
  {
    sequelize,
    // Ensuring timestamps are added to the model
    timestamps: false,
    // Ensuring the table name is singularized
    freezeTableName: true,
    // Using underscored naming for the columns
    underscored: true,
    // Defining the model name
    modelName: "user",
    // Hooks for password hashing before model creation
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
  }
);

// Exporting the User model
module.exports = User;
