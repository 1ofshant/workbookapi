const { UserModel } = require('../models');

const TokenController = require('../controllers/TokenController');

module.exports = async (req, res, next) => {
  const { token } = req;

  const hasToken = await TokenController.check(token);

  if(!hasToken) {
    res.status(401).send();
    return;
  }

  const data = await TokenController.decrypt(token);

  if (!data && !data.userId) {
    res.status(401).send();
    return;
  }

  req.userId = data.userId;
  req.token = token;

  next();
};
