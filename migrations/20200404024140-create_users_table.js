'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      passwd: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      passportId: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      birthDate: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true,
      },
      role: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
