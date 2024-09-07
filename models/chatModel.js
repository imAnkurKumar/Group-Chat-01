const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Chat = sequelize.define("chats", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Chat;
