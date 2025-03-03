const { Sequelize } = require("sequelize");

const db = new Sequelize(
  process.env.DB_NAME || "notes_db",
  process.env.DB_USER || "user",
  process.env.DB_PASSWORD || "passwordroot",
  {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3308",
    dialect: "mysql",
  }
);

module.exports = db;