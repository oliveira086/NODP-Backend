'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'categorias_postagens',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          comment: "null",
          autoIncrement: true
        },
        descricao: {
          type: Sequelize.STRING(50),
          allowNull: false,
          comment: "null"
        }
      });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('categorias_postagens');
  }
};
