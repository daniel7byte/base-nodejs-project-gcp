'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class state extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.belongsTo(models.country, { as: 'country', foreignKey: 'country_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
      this.hasMany(models.city, { as: 'cities', foreignKey: 'state_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' });
    }
  }
  state.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING
    },
    country_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
    modelName: 'state',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })
  return state
}
