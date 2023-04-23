'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Applications.belongsTo(models.Users, {as: 'user', foreignKey: 'user_id'});
      Applications.hasMany(models.ApplicationsDocuments, {as:'documents', foreignKey: 'application_id'})
      Applications.hasMany(models.ApplicationsPhotos, {as:'photos', foreignKey: 'application_id'})
      Applications.hasMany(models.ApplicationsPayments, {as:'payments', foreignKey: 'application_id'})
    }
  }
  Applications.init({

    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
    legal_first_names: {
      type: DataTypes.STRING,
      allowNull: false
    },
    legal_last_names: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passport_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passport_expiration_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    residence: {
      type: DataTypes.STRING,
      allowNull: false
    },
    residence_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['draft', 'confirmed']]
      }
    },
  }, {
    sequelize,
    modelName: 'Applications',
    tableName: 'applications',
    underscored: true,
    timestamps: true,
  });
  return Applications;
};