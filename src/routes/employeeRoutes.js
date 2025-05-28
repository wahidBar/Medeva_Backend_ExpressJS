const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const multer = require("multer");
const {
  createEmployeeValidation,
  updateEmployeeValidation,
} = require("../middleware/employeeValidator");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.get("/", employeeController.getAll);
router.post(
  "/",
  upload.single("photo"),
  createEmployeeValidation,
  employeeController.create
);
router.put(
  "/:id",
  upload.single("photo"),
  updateEmployeeValidation,
  employeeController.update
);
router.delete("/:id", employeeController.remove);

module.exports = router;
