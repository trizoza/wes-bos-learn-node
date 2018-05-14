exports.myMiddleware = (req, res, next) => {
  req.name = 'Pete'
  next()
}

exports.homePage = (req, res) => {
  console.log(req.name)
  res.render('index');
}