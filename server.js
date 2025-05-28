const app = require("./src/app");
const db = require("./src/models");

const PORT = 5000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
