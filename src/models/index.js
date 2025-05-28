// models/index.js
const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config")["development"];
const sequelize = new Sequelize(config);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Employee = require("./employee")(sequelize, DataTypes);
db.Role = require("./role")(sequelize, DataTypes);

Object.keys(db).forEach((model) => {
  if (db[model].associate) db[model].associate(db);
});

module.exports = db;
