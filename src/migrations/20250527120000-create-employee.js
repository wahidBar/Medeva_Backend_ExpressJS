"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("employees", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      full_name: Sequelize.STRING,
      nik: Sequelize.STRING,
      gender: Sequelize.STRING,
      birth_place: Sequelize.STRING,
      birth_date: Sequelize.DATE,
      phone: Sequelize.STRING,
      province: Sequelize.STRING,
      city: Sequelize.STRING,
      district: Sequelize.STRING,
      subdistrict: Sequelize.STRING,
      address: Sequelize.TEXT,
      username: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      type: Sequelize.STRING,
      contract_start: Sequelize.DATE,
      contract_end: Sequelize.DATE,
      marital_status: Sequelize.STRING,
      bpjs_code: Sequelize.STRING,
      status: Sequelize.STRING,
      photo: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("employee");
  },
};
