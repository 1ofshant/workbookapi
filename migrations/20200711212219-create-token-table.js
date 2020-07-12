'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('userToken', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      token: {
        primaryKey: true,
        type: Sequelize.STRING(300)
      },
      userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userToken');
  }
};
