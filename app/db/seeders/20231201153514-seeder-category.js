'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
       queryInterface.bulkInsert('Categories', [
        {
            name: 'Business & Economy',
            user: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Art & Desing',
            user: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Agriculture',
            user: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Programming',
            user: 1,
            createdAt: new Date(),
            updatedAt: new Date()
       }
    ], {});
  
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
