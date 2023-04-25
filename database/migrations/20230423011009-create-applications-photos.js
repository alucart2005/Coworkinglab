//migration de applications_photos creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('applications_photos', {
        application_id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          foreingKey: true,
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT',
          references: {
            model: 'applications', // Aquí debes especificar el nombre de la tabla referenciada
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
      await queryInterface.dropTable('applications_photos', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}