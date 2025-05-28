require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "Akbar112",
    database: process.env.DB_NAME || "medeva_db",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  },
  test: {
    // ...
  },
  production: {
    // ...
  },
};
