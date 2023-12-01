'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Books', [
        {
            title: 'Nodejs from Zero to Expert',
            author: "Ricky",
            image: "upload/image_01.png",
            published: new Date(),
            price: 95000,
            stock: 100,
            user: 1,
            category: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Microservice Using Golang',
            author: "Ricky",
            image: "upload/image_02.png",
            published: new Date(),
            price: 200000,
            stock: 100,
            user: 1,
            category: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
      }
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Books', null, {});
    
  }
};
