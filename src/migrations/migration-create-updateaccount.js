'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('updateaccount', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      machinename: {
        type: Sequelize.STRING
      },
      serialnumber: {
        type: Sequelize.STRING
      },
      profilename: {
        type: Sequelize.STRING
      },
      checkbm: {
        type: Sequelize.BOOLEAN
      },
      birthday: {
        type: Sequelize.STRING
      },
      uid: {
        type: Sequelize.STRING
      },
      countaccount: {
        type: Sequelize.STRING
      },
      Ideal: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      pickdate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('updateaccount');
  }
};