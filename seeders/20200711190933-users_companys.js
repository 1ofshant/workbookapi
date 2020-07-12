'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users_companys', [
      {
        companyName: 'Microsoft',
        userId: 1,
        startDate: '01.03.2020',
        endDate: '12.03.2020',
      },
      {
        companyName: 'Apple',
        userId: 1,
        startDate: '15.03.2020',
        endDate: '22.04.2020',
      },
      {
        companyName: 'Google',
        userId: 1,
        startDate: '24.04.2020',
      },
      {
        companyName: 'Google',
        userId: 2,
        startDate: '02.01.2020',
        endDate: '13.06.2020',
      },
      {
        companyName: 'Amazon',
        userId: 2,
        startDate: '14.06.2020',
      },
      {
        companyName: 'Tashit',
        userId: 3,
        startDate: '28.12.2019',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users_companys', null, {});
  }
};
