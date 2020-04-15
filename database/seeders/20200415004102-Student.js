"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Students",
      [
        {
          firstName: "Ley",
          lastName: "James",
          email: "user2@gmail.com",
          password: "abc123",
          collegeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete("Students", null, {}),
};
