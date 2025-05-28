"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Roles", [
      { name: "Admin", createdAt: new Date(), updatedAt: new Date() },
      { name: "Staff", createdAt: new Date(), updatedAt: new Date() },
      { name: "Docktor", createdAt: new Date(), updatedAt: new Date() },
      { name: "Pasien", createdAt: new Date(), updatedAt: new Date() },
      { name: "Resepsionis", createdAt: new Date(), updatedAt: new Date() },
      { name: "Perawat", createdAt: new Date(), updatedAt: new Date() },
      { name: "Dokter", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
