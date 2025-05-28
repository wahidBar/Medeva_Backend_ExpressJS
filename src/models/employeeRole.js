module.exports = (sequelize, DataTypes) => {
  const EmployeeRole = sequelize.define("employee_roles", {
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });

  return EmployeeRole;
};
