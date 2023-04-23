//migration de users_stripe creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try  {
      await queryInterface.createTable('users_stripe', {
        user_id: {
          allowNull: false,
          primaryKey: true,
          foreingKey: true,
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT',
          references: {
            model: 'users',
            key: 'id',
          },
        },
        client_id: {
          allowNull: false,
          type: Sequelize.STRING,
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
      await queryInterface.dropTable('users_stripe', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}