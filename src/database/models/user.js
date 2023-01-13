'use strict';

const bcrypt = require('bcryptjs')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.belongsTo(models.country, { as: 'country', foreignKey: 'country_id', onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
    }
  }
  user.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      set (value) {
        this.setDataValue('email', value?.trim())
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      set (value) {
        this.setDataValue('password', value ? bcrypt.hashSync(value, 12) : null)
      }
    },
    phone: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING
    },
    country_id: {
      type: DataTypes.UUID,
      allowNull: false
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
    modelName: 'user',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return user;
};