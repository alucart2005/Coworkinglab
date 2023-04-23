//migration de applications creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try  {
      await queryInterface.createTable('applications', {
        user_id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          foreingKey: true,
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT',
          references: {
            model: 'users',
            key: 'id'
          },
        },
        legal_first_names: {
          type: Sequelize.STRING,
          allowNull: false
        },
        legal_last_names: {
          type: Sequelize.STRING,
          allowNull: false
        },
        nationality: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false
        },
        date_of_birth: {
          type: Sequelize.DATE,
          allowNull: false
        },
        gender: {
          type: Sequelize.STRING,
          allowNull: false
        },
        passport_number: {
          type: Sequelize.STRING,
          allowNull: false
        },
        passport_expiration_date: {
          type: Sequelize.DATE,
          allowNull: false
        },
        residence: {
          type: Sequelize.STRING,
          allowNull: false
        },
        residence_address: {
          type: Sequelize.STRING,
          allowNull: false
        },
        job: {
          type: Sequelize.STRING,
          allowNull: false
        },
        comments: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            isIn: [['draft', 'confirmed']]
          }
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
      await queryInterface.dropTable('applications', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}