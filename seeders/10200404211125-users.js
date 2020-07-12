'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'Gegham',
        lastName: 'Sargsyan',
        passwd: '1234',
        passportId: 'AN123123',
        birthDate: '03.06.1996',
        email: 'gegham@gmail.com',
        role: 1,
      },
      {
        firstName: 'Shant',
        lastName: 'Tonoyan',
        passwd: '1111',
        passportId: 'AN321321',
        birthDate: '02.05.1994',
        email: 'shant@gmail.com',
        role: 1,
      },
      {
        firstName: 'Christian',
        lastName: 'Manukyan',
        passwd: '2222',
        passportId: 'AN334432',
        birthDate: '06.09.2004',
        email: 'christian@gmail.com',
        role: 0,
      },
      {
        firstName: 'Vasya',
        lastName: 'Pupkin',
        passwd: '2222',
        passportId: 'NA4444444',
        birthDate: '11.02.2001',
        email: 'vasya@gmail.com',
        role: 0,
      },
      {
        firstName: 'Ded',
        lastName: 'Moroz',
        passwd: '2222',
        passportId: 'AN0000000',
        birthDate: '31.12.1900',
        email: 'moroz@gmail.com',
        role: 0,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
