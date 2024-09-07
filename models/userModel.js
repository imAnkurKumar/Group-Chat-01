const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Name: Sequelize.STRING,
  Email: Sequelize.STRING,
  Phone: Sequelize.STRING,
  Password: Sequelize.STRING,
});

module.exports = User;
