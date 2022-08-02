'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
    */

     await queryInterface.bulkInsert('Shows', [{"id": 1, "title":"A Little Late With Lilly Singh","network":"NBC","imdbRating":1.5},
     {"id": 2, "title":"American Gods","network":"STARZ","imdbRating":7.7},
     {"id": 3, "title":"American Idol","network":"ABC","imdbRating":4.1},
     {"id": 4, "title":"Below Deck","network":"Bravo","imdbRating":7.3},
     {"id": 5, "title":"Big Little Lies","network":"HBO","imdbRating":8.5},
     {"id": 6, "title":"black-ish","network":"ABC","imdbRating":7.1},
     {"id": 7, "title":"Bunheads","network":"Freeform","imdbRating":7.6},
     {"id": 8, "title":"Dexter","network":"Showtime","imdbRating":8.6},
     {"id": 9, "title":"Everything's Gonna Be Okay","network":"Freeform","imdbRating":7.3},
     {"id": 10, "title":"Mom","network":"CBS","imdbRating":7.2},
     {"id": 11, "title":"Outlander","network":"STARZ","imdbRating":8.4},
     {"id": 12, "title":"Rebel","network":"BET","imdbRating":5.4},
     {"id": 13, "title":"Riverdale","network":"CW","imdbRating":6.8},
     {"id": 14, "title":"Silicon Valley","network":"HBO","imdbRating":8.5},
     {"id": 15, "title":"Southern Charm","network":"Bravo","imdbRating":6.2},
     {"id": 16, "title":"SpongeBob SquarePants","network":"Nickelodeon","imdbRating":8.2},
     {"id": 17, "title":"Rocket Power","network":"Nickelodeon","imdbRating":6.2},
     {"id": 18, "title":"The Amazing Race","network":"CBS","imdbRating":7.6},
     {"id": 19, "title":"The Fosters","network":"Freeform","imdbRating":7.9},
     {"id": 20, "title":"Top Chef","network":"Bravo","imdbRating":7.6},
     {"id": 21, "title":"Tyler Perry's The Oval","network":"BET","imdbRating":4},
     {"id": 22, "title":"Zoey's Extraordinary Playlist","network":"NBC","imdbRating":8.1}], {});
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
