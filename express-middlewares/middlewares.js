const middlewares = (req, res, next) => {
  const middlewareHeader = req.path.replace('/', '');
  res.set('middleware-header', middlewareHeader);
  return next();
};

module.exports = middlewares;
