const authMiddleware = (req, res, next) => {
    if (req.session.userLogged) {
        next()

    }
    else {
        res.redirect('../users/login')

    }

    //     next()
}

module.exports = authMiddleware;