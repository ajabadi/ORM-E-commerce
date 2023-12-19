const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define id column as an integer, doesn't allow null values, set as primary key, and uses auto increment
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define category_name column as a string, doesn't allow null values
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false, // don't automatically create timestamp fields
    freezeTableName: true, // prevent Sequelize from pluralizing the table name
    underscored: true, // use underscores instead of camelCasing
    modelName: 'category', // set the model name to 'category'
  }
);

module.exports = Category;
