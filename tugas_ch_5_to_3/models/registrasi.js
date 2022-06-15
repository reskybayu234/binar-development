'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registrasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Registrasi.init({
    nama: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Registrasi',
  });
  return Registrasi;
};