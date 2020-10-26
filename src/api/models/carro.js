'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    };
  };
  Carro.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    anoFab: DataTypes.INTEGER,
    km: DataTypes.INTEGER,
    status: DataTypes.STRING,
    placa: DataTypes.STRING,
    img: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Carro',
  });
  return Carro;
};