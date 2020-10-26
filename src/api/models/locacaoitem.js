'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LocacaoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LocacaoItem.belongsTo(models.Locacao);
    }
  };
  LocacaoItem.init({
    locacaoId: DataTypes.INTEGER,
    carroId: DataTypes.INTEGER,
    valor: DataTypes.FLOAT,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LocacaoItem',
  });
  return LocacaoItem;
};