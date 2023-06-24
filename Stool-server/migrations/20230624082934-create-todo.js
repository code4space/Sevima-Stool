"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Todos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      task: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.TEXT,
      },
      StudentId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Students",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      TeacherId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Teachers",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Todos");
  },
};