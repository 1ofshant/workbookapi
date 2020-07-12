const jwt = require('jsonwebtoken');

const config = require('../utils/getConfig')();

const { jwt_key } = config;

const { TokenModel } = require('../models');

class TokenController {
  static async create(userId) {
    const token = jwt.sign({ userId }, jwt_key);

    await TokenModel.create({ userId, token });

    return token;
  }

  static async check(token) {
    const hasToken = await TokenModel.findOne({ where: { token } });

    return (!!hasToken);
  }

  static async logoutAll(req, res) {
    const { userId = '' } = req;

    if (!userId) res.status(422).send();

    await TokenModel.destroy({ where: { userId } });

    res.send({ ok: 'ok' });
  }

  static async logout(req, res) {
    const { token } = req;

    if (!token) res.status(422).send();

    await TokenModel.destroy({ where: { token } });

    res.send({ ok: 'ok' });
  }

  static async delete(userId) {
    await TokenModel.destroy({ where: { userId } });

    return true;
  }

  static async decrypt(token) {
    let decryptedData;
    jwt.verify(token, jwt_key, (err, data) => {
      if (err) return err;
      decryptedData = data;
    });
    return decryptedData;
  }
};

module.exports = TokenController;
