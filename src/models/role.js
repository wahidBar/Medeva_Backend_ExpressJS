module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("Role", {
    name: DataTypes.STRING,
  });

  Role.associate = (models) => {
    Role.belongsToMany(models.Employee, {
      through: "employee_roles",
      foreignKey: "role_id",
      as: "employees",
    });
  };

  return Role;
};
