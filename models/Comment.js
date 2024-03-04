// Importing necessary modules from Sequelize
const { Model, DataTypes } = require("sequelize");
// Importing the connection instance from the configuration file
const sequelize = require("../config/connection");

// Defining the Comment model by extending the Sequelize Model class
class Comment extends Model {}

// Initializing the Comment model with defined attributes and options
Comment.init(
  {
    // Defining the 'id' attribute
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Defining the 'comment_content' attribute
    comment_content: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    // Defining the 'user_id' attribute with a foreign key reference to the 'user' model
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    // Defining the 'post_id' attribute with a foreign key reference to the 'post' model
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    // Passing the connection instance
    sequelize,
    // Configuring timestamps
    timestamps: true,
    // Ensuring the table name is singularized
    freezeTableName: true,
    // Using underscored naming for the columns
    underscored: true,
    // Defining the model name
    modelName: "comment",
  }
);

// Exporting the Comment model
module.exports = Comment;
