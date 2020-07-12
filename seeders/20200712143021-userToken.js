'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('userToken', [
      {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU5NDU2NDE4NH0.3DEdrC5xbD7doLqeqo2ohOfVVL-t-CotqGcensbK0SY',
        userId: 2
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('uesrToken', null, {});
  }
};
