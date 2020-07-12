const { UserModel, UserCompanyModel } = require('../models');

const TokenController = require('./TokenController');

class UserController {
  static async login (req, res) {
    const { email = '', passwd = '' } = req.body;

    const user = await UserModel.findOne({
      where: { email, passwd }
    });

    if (user) {
      const userId = user.id;

      const token = await TokenController.create(userId);

      const { passwd, ...userData } = user.dataValues;

      res.send({ token, ...userData });
      return;
    }

    res.status(401).send();
  }

  static async getOne(req, res) {
    const { userId = '' } = req.query;
    
    const user = await UserModel.findOne({ where: { id: userId } });
    const experience = await UserCompanyModel.findAll({
      where: { userId },
    });

    if (!user) res.status(422).send();

    res.send({ user, experience });
  }

  static async getAll(req, res) {
    const users = await UserModel.findAll({
      where: { role: 0 },
      include: {
        model: UserCompanyModel,
        as: 'users_companys'
      }
    });
    
    if (!users) req.status(422).send();

    res.send(users);
  }

  static async create(req, res) {
    const { user = {}, experience = [] } = req.body;
    try {
      const createdUser = await UserModel.create(user);
      if (!createdUser) {
        res.status(422).send();
        return;
      }
      const experincesWithUserId = experience.map(data => ({ ...data, userId: createdUser.id }));

      const validateExperience = experience.every(({ companyName, startDate }) => companyName && startDate);

      const createdExperience = validateExperience
        ? await UserCompanyModel.bulkCreate(experincesWithUserId)
        : [];

      res.send({ user: createdUser, experience: createdExperience || [] });
    } catch(e) {
      res.status(422).send();
    }
  }

  static async update(req, res) {
    const { userId, ...userData } = req.body;

    try {
      await UserModel.update(
        { ...userData },
        { where: { id: userId } },
      );

      const user = await UserModel.findOne({
        where: { id: userId }
      });
      
      res.send(user);
    } catch(e) {
      res.status(422).send();
    }
  }

  static async delete(req, res) {
    const { userId = '' } = req.query;

    if (!userId) {
      res.status(422).send();
      return;
    }

    await TokenController.delete(userId);

    await UserCompanyModel.destroy({ where: { userId } });

    await UserModel.destroy({ where: { id: userId } });

    const users = await UserModel.findAll({ where: { role: 0 } });

    res.send(users);
  }

  static async auth(req, res) {
    const { userId } = req;

    const user = await UserModel.findOne({
      where: { id: userId },
    })

    if (!user) {
      res.status(401).send();
      return;
    }

    res.send(user);
  }
};

module.exports = UserController;
