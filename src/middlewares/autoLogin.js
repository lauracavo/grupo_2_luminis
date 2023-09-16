const arrData = require('../data/database.json'); // JS


const autoLogin = (req, res, next) =>{
    if(req.cookies.email !== undefined){
       const findUser = arrData.find((aUser) => aUser.email === req.cookies.email);

       req.session.userLogged = findUser;

    }

    next()
}

module.exports = autoLogin;