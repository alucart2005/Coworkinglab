'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicationsPhotos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ApplicationsPhotos.belongsTo(models.Applications, {as:'application', foreignKey:'application_id'})
    }
  }
  ApplicationsPhotos.init({
    application_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    url: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    order: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'ApplicationsPhotos',
    tableName: 'applications_photos',
    underscored: true,
    timestamps: true,
  });
  return ApplicationsPhotos;
};