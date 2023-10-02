const arrData = require('../dataBase/users.json'); // JS
const {users} = arrData;

const autoLogin = (req, res, next) =>{
    if(req.cookies.email !== undefined){
       const findUser = users.find((aUser) => aUser.email === req.cookies.email);

       req.session.userLogged = findUser;

    }

    next()
}

module.exports = autoLogin;