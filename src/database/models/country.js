'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.hasMany(models.state, { as: 'states', foreignKey: 'country_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });
    }
  }
  country.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    acronym: DataTypes.STRING,
    code: DataTypes.INTEGER,
    is_available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'country',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })
  return country
}
