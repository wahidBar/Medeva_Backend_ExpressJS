const { body } = require("express-validator");

const createEmployeeValidation = [
  body("full_name").notEmpty().withMessage("Nama tidak boleh kosong"),

  body("email").isEmail().withMessage("Format email tidak valid"),

  body("phone").notEmpty().withMessage("Nomor telepon tidak boleh kosong"),

  body("status")
    .optional()
    .isIn(["Active", "Non-Active"])
    .withMessage("Status harus Active atau Non-Active"),

  body("roles")
    .isArray({ min: 1 })
    .withMessage("Roles harus berupa array dan minimal 1 role"),
];

const updateEmployeeValidation = [
  body("full_name")
    .optional()
    .notEmpty()
    .withMessage("Nama tidak boleh kosong"),

  body("email").optional().isEmail().withMessage("Format email tidak valid"),

  body("phone")
    .optional()
    .notEmpty()
    .withMessage("Nomor telepon tidak boleh kosong"),

  body("status")
    .optional()
    .isIn(["Active", "Non-Active"])
    .withMessage("Status harus Active atau Non-Active"),

  body("roles").optional().isArray().withMessage("Roles harus berupa array"),
];

module.exports = {
  createEmployeeValidation,
  updateEmployeeValidation,
};
