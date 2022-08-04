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
    await queryInterface.bulkInsert('Networks', [{"id":1, "name":"CBS","description":"CBS"}, 
     {"id":2, "name":"CW","description":"CW"},
     {"id":3, "name":"ABC","description":"ABC"},
     {"id":4, "name":"NBC","description":"NBC"},
     {"id":5, "name":"BET","description":"BET"},
     {"id":6, "name":"Freeform","description":"Freeform"},
     {"id":7, "name":"Nickelodeon","description":"Nickelodeon"},
     {"id":8, "name":"Bravo","description":"Bravo"},
     {"id":9, "name":"HBO","description":"HBO"},
     {"id":10, "name":"Showtime","description":"Showtime"},
     {"id":11, "name":"STARZ","description":"STARZ"}], {});
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


