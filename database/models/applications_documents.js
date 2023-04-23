'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicationsDocuments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ApplicationsDocuments.belongsTo(models.Applications, {as:'application', foreignKey:'application_id'})
    }
  }
  ApplicationsDocuments.init({
    application_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  }, {
    sequelize,
    modelName: 'ApplicationsDocuments',
    tableName: 'applications_documents',
    underscored: true,
    timestamps: true,
  });
  return ApplicationsDocuments;
};