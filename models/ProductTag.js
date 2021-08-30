const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // <<< Note, its table's name, not object name
        key: 'id' // <<< Note, its a column name
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // <<< Note, its table's name, not object name
        key: 'id' // <<< Note, its a column name
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
