const employeeRepository = require("../repositories/employeeRepository");
const { validationResult } = require("express-validator");

exports.getAll = async (req, res) => {
  try {
    const employees = await employeeRepository.findAll();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data karyawan" });
  }
};

exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const photo = req.file ? req.file.filename : null;
    const data = { ...req.body, photo };
    const newEmployee = await employeeRepository.create(data);
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.update = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { id } = req.params;
    const photo = req.file ? req.file.filename : undefined;
    const data = { ...req.body, ...(photo && { photo }) };
    const updated = await employeeRepository.update(id, data);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengupdate karyawan" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    await employeeRepository.remove(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Gagal menghapus karyawan" });
  }
};
