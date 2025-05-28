"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("employee_roles", [
      {
        employee_id: 1,
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_id: 2,
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        employee_id: 3,
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("employee_roles", null, {});
  },
};
