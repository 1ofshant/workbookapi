'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_companys', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      companyName: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      startDate: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      endDate: {
        type: Sequelize.STRING(25),
        allowNull: true,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_companys');
  }
};
