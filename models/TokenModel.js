const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const TokenModel = sequelize.define(
    'TokenModel',
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      token: {
        primaryKey: true,
        type: DataTypes.STRING
      },
      userId: Sequelize.INTEGER(11)
    },
    {
      tableName: 'userToken',
      timestamps: false,
    }
  );

  TokenModel.associate = models => {
    TokenModel.belongsTo(models.UserModel, {
      as: 'users',
      foreignKey: 'id'
    })
  };

  return TokenModel;
};
