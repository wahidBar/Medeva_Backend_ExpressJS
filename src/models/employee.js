module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("employees", {
    full_name: DataTypes.STRING,
    nik: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth_place: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    phone: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    subdistrict: DataTypes.STRING,
    address: DataTypes.TEXT,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.STRING,
    contract_start: DataTypes.DATE,
    contract_end: DataTypes.DATE,
    marital_status: DataTypes.STRING,
    bpjs_code: DataTypes.STRING,
    status: DataTypes.STRING,
    photo: DataTypes.STRING,
  });

  Employee.associate = (models) => {
    Employee.belongsToMany(models.Role, {
      through: "employee_roles",
      foreignKey: "employee_id",
      as: "roles",
    });
  };

  return Employee;
};
