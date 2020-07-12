const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define(
    'UserModel',
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      passwd: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      passportId: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      birthDate: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      role: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
      },
    },
    {
      tableName: 'users',
      timestamps: false,
    }
  );

  UserModel.associate = models => {
    UserModel.hasMany(models.TokenModel, {
      as: 'tasks',
      foreignKey: 'id'
    })
    UserModel.hasMany(models.UserCompanyModel, {
      as: 'users_companys',
      foreignKey: 'userId'
    });
  };

  return UserModel;
};
