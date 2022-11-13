'use strict';

const formatedDate = new Date().toLocaleString().split(', ').join(' ');

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'comments',
      [
        {
          user: 'Leonardo',
          content:
            'A full stack developer wanting to show all his skills and improve them, in his first job',
          date: formatedDate,
        },
        {
          user: 'Leonardo G',
          content: 'Hope you enjoy the retro single blog page :)',
          date: formatedDate,
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('comments', null, {});
  },
};
