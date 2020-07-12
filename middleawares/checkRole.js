const { UserModel } = require('../models');
module.exports = async (req, res, next) => {
  const { userId } = req;

  const user = await UserModel.findOne({
    where: { id: userId },
  });

  if (user.role !== 1) {
    res.status(403).send();
    return;
  }

  next();
};