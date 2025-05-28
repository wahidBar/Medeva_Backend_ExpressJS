const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "employees",
    {
      full_name: DataTypes.STRING,
      nik: DataTypes.STRING,
      gender: DataTypes.STRING,
      birth_place: DataTypes.STRING,
      birth_date: DataTypes.DATEONLY,
      phone: DataTypes.STRING,
      province: DataTypes.STRING,
      city: DataTypes.STRING,
      district: DataTypes.STRING,
      subdistrict: DataTypes.STRING,
      address: DataTypes.TEXT,
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: DataTypes.STRING,
      contract_start: DataTypes.DATEONLY,
      contract_end: DataTypes.DATEONLY,
      marital_status: DataTypes.STRING,
      bpjs_code: DataTypes.STRING,
      status: {
        type: DataTypes.STRING,
        defaultValue: "Active",
      },
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "employees",
      hooks: {
        beforeCreate: async (employee) => {
          if (employee.password) {
            const salt = await bcrypt.genSalt(10);
            employee.password = await bcrypt.hash(employee.password, salt);
          }
        },
        beforeUpdate: async (employee) => {
          if (employee.changed("password")) {
            const salt = await bcrypt.genSalt(10);
            employee.password = await bcrypt.hash(employee.password, salt);
          }
        },
      },
    }
  );

  Employee.associate = (models) => {
    Employee.belongsToMany(models.Role, {
      through: "employee_roles",
      foreignKey: "employee_id",
      as: "roles",
    });
  };

  return Employee;
};
