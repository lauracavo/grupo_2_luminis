





const loginMiddleware = (req, res, next) =>{
    
    res.locals.isLogged = false;
    
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.myUser = req.session.userLogged;
    }

    next()
}

module.exports = loginMiddleware;