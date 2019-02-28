
function requireLogin(req, res, next) {
  if (req.session.user !== true) {
    res.redirect('/login');
  } else {
    next();
  }
}

module.exports = requireLogin;
