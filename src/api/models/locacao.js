'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Locacao.belongsTo(models.Usuario);
      Locacao.hasMany(models.LocacaoItem);
    }
  };
  Locacao.init({
    usuarioId: DataTypes.INTEGER,
    carroId: DataTypes.INTEGER,
    valor: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Locacao',
  });
  return Locacao;
};