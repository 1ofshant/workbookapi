const { UserCompanyModel } = require('../models');

class UserCompanyController {
  static async getAll(req, res) {
    const { userId } = req.query;

    const companys = await UserCompanyModel.findAll(
      { where: { userId } },
    );

    if (!companys) res.status(500).send();

    res.send(companys);
  }

  static async update(req, res) {
    const { id, ...body } = req.body;
    
    try {
      const company = await UserCompanyModel.findOne({
        where: { id },
      });

      await company.update(
        { ...body },
      );

      const companys = await UserCompanyModel.findAll({
        where: { userId: company.userId },
      });

      res.send(companys);
    } catch(e) {
      res.status(422).send();
    }
  }

  static async create(req, res) {
    try {
      await UserCompanyModel.create(req.body);

      const companys = await UserCompanyModel.findAll(
        { where: { userId: req.body.userId } },
      );

      res.send(companys);
    } catch(e) {
      res.status(422).send();
    }
  }

  static async delete(req, res) {
    const { id } = req.query;

    try {
      const company = await UserCompanyModel.findOne(
        { where: { id } },
      );

      const userId = company.userId;

      await company.destroy();

      const companys = await UserCompanyModel.findAll({
        where: { userId },
      });

      res.send(companys);
    } catch(e) {
      res.status(422).send();
    }
  }
};

module.exports = UserCompanyController;
