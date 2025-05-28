const { Employee, Role } = require("../models");

const getRandomStatus = () => (Math.random() < 0.5 ? "Active" : "Non-Active");

exports.findAll = async () => {
  return await Employee.findAll({
    include: {
      model: Role,
      as: "roles",
      through: { attributes: [] },
    },
  });
};

exports.create = async (data) => {
  const { roles, ...employeeData } = data;

  if (!employeeData.status) {
    employeeData.status = getRandomStatus();
  }

  const employee = await Employee.create(employeeData);

  if (roles) {
    await employee.setRoles(roles);
  }

  return await Employee.findByPk(employee.id, { include: ["roles"] });
};

exports.update = async (id, data) => {
  const { roles, ...employeeData } = data;
  const employee = await Employee.findByPk(id);
  if (!employee) throw new Error("Karyawan tidak ditemukan");

  await employee.update(employeeData);

  if (roles) {
    await employee.setRoles(roles);
  }

  return await Employee.findByPk(id, { include: ["roles"] });
};

exports.remove = async (id) => {
  const employee = await Employee.findByPk(id);
  if (!employee) throw new Error("Karyawan tidak ditemukan");
  await employee.destroy();
};
