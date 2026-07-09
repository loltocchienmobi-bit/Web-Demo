function ensureAuth(req, res, next) {
  if (req.session.user) return next();
  return res.redirect('/admin/login');
}

function ensureAdmin(req, res, next) {
  if (req.session.user && req.session.user.role === 'admin') return next();
  return res.redirect('/admin/login');
}

module.exports = { ensureAuth, ensureAdmin };
