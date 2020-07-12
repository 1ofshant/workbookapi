module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization) {
    res.status(401).send();
    return;
  }

  const token = authorization && authorization.split(' ')[1];

  if (!token) {
    res.status(401).send();
    return;
  }

  req.token = token;

  next();
};
