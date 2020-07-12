const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const UserCompanyModel = sequelize.define(
    'UserCompanyModel',
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      companyName: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      startDate: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      endDate: {
        type: Sequelize.STRING(25),
        allowNull: true,
      },
    },
    {
      tableName: 'users_companys',
      timestamps: false,
    }
  );

  UserCompanyModel.associate = models => {
    UserCompanyModel.belongsTo(models.UserModel, {
      as: 'users',
      foreignKey: 'id'
    });
  };

  return UserCompanyModel;
};
