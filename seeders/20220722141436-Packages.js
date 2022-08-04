'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Packages', [{"id":1, "name":"Basic","networks":["CBS","CW","ABC","NBC"],"price":9.9},
     {"id":2, "name":"Gold","networks":["CBS","CW","ABC","NBC","BET","Freeform","Nickelodeon","Bravo","HBO","Showtime","STARZ"],"price":37.9},
     {"id":3, "name":"Select","networks":["CBS","CW","ABC","NBC","BET","Freeform","Nickelodeon","Bravo"],"price":17.9},
     {"id":4, "name":"Silver","networks":["CBS","CW","ABC","NBC","BET","Freeform","Nickelodeon","Bravo","HBO","Showtime"],"price":27.9}], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
