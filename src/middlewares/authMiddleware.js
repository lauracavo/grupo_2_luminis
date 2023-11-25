const authMiddleware = (req, res, next) => {
    if (req.session.successLoginUser) {
        console.log(req.session);
        next()

    }
    else {
        res.redirect('../users/login')

    }
}

module.exports = authMiddleware;