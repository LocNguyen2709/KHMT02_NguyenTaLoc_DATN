"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Sizes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sizeClothes: {
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.bulkInsert("Sizes", [
      { sizeClothes: 36, createdAt: new Date(), updatedAt: new Date() },
      { sizeClothes: 37, createdAt: new Date(), updatedAt: new Date() },
      { sizeClothes: 38, createdAt: new Date(), updatedAt: new Date() },
      { sizeClothes: 39, createdAt: new Date(), updatedAt: new Date() },
      { sizeClothes: 40, createdAt: new Date(), updatedAt: new Date() },
      { sizeClothes: 41, createdAt: new Date(), updatedAt: new Date() },
      { sizeClothes: 42, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Sizes");
  },
};
