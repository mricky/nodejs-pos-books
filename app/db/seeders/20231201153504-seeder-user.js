'use strict';
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     const password = bcrypt.hashSync("rahasia",10);
     await queryInterface.bulkInsert('Users', [{
       name: 'Ricky',
       email: "mricky.it@gmail.com",
       role: "admin",
       password: password,
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Users', null, {});
  }
};
