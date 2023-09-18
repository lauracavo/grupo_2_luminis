const arrData = require('../dataBase/usuarios.json'); // JS
const {usuarios} = arrData;

const autoLogin = (req, res, next) =>{
    if(req.cookies.email !== undefined){
       const findUser = usuarios.find((aUser) => aUser.email === req.cookies.email);

       req.session.userLogged = findUser;

    }

    next()
}
console.log(usuarios);
module.exports = autoLogin;