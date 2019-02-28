
function requireAdminLogin(req, res, next) {

    if (req.session.admin === false) {
        res.redirect('/noAccess');

    }
    else{
        next();
    }
}

module.exports = requireAdminLogin;
