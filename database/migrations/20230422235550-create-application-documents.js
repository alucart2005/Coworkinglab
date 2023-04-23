//migration de application_documents creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('application_documents', {
        application_id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          foreingKey: true,
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT',
          references: {
            model: 'applications',
            key: 'user_id',
          },
        },
        url: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        order: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        }
      }, { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
  down: async (queryInterface, /*Sequelize*/) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('application_documents', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}