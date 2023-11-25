const db = require('../../database/models/index');
const upload = require("../middlewares/multerConfigProd");



const adminController = {
  getAll: async (req, res) => {
      try{
        let product = await db.Product.findAll()
        const newProduct = await Promise.all(product.map(async (item) => {  
        const imgList = await db.ImageProduct.findOne({ where: { idProduct: item.idProduct } })
        return { ...item.dataValues, imgList: imgList ? imgList.dataValues : null };
      }));
      res.render("admin", {product: newProduct})      
       }
       catch (error){
          res. send({ result: 'Error', payload: error });
          
  }
 },
  create: async (req, res) => {
    const allCategories = await db.Categorie.findAll({})

    console.log(await db.Categorie.findAll({ attributes: ["name"] }))

    res.render('formCreate', { allCategories })
    // Renderiza la página de creación de productos
  },

  store: async (req, res) => {
    try {
      const {
        name, brand, editorial, author, detail, characteristic, purchasePrice, salePrice, stock, idCategory
      } = req.body;

      // Crear el producto 
      const product = await db.Product.create({
        name, brand, editorial, author, detail, characteristic, purchasePrice, salePrice, stock, idCategory
      });

      const idProduct = product.idProduct;

      // Guardar las imágenes asociadas al producto 
      const imgProduct = req.files;

      // Verificamos si hay una imagen cargada
      if (imgProduct && imgProduct.length > 0) {
        // Si hay una imagen cargada, la guardamos
        await Promise.all(imgProduct.map(async (img) => {
          const imageRecord = { name: img.filename, idProduct };
          await db.ImageProduct.create(imageRecord);
        }));
      } else {
        // Si no hay imagen cargada, guardamos una imagen por defecto
        const defaultImageRecord = { name: 'sinImagen.png', idProduct };
        await db.ImageProduct.create(defaultImageRecord);
      }
     
      res.status(200).json({ success: true, message: "producto creado con éxito." });
    }
    catch (error) {
      res.status(500).json({ success: false, message: "Error al crear producto." });
    }
  },

  
          
           
      
  edit: async (req, res) => {
    
    const allCategories = await db.Categorie.findAll()  
    console.log (allCategories)
    db.Product.findByPk(req.params.id)
  
      .then(products => {
       
        res.render("formEdit", { products, allCategories})
        
      })
      .catch(error => {
        res.send({ result: 'Error', payload: error })
      })
  },

  editProduct: async (req, res) => {
    try {
      const { id } = req.params;
      
     
      await db.Product.update(req.body, {
       
        where: { idProduct: parseInt(id) },
        
      });
      
      res.redirect("/admin"); // Redirigir de nuevo a la página de administrador
    } catch (error) {
      // Manejar el error aquí
      console.error(error); // Puedes imprimir el error en la consola para depuración
      res.status(500).send("Ha ocurrido un error al editar el producto.");
    }
  },
  delete: async (req, res) => {    
    try { 
    const productId = req.params.id;
    console.log('La función eliminar se está ejecutando. Producto ID:', productId);
    const foundProduct = await db.Product.findOne({ where: { idProduct:  productId} });
    console.log('Producto encontrado:', foundProduct);
    if (foundProduct) {
      const deleteResult = await db.Product.destroy({ where: { idProduct: foundProduct.idProduct } });
      console.log('Resultado de eliminación:', deleteResult);
      if (deleteResult > 0) {
        console.log('Producto eliminado con éxito.');
        res.redirect ('/admin')
       } else {
        console.log('Producto no encontrado o no se pudo eliminar.');
       }
        }     
    } catch (error) {
      res.status(500).json({ success: false, message: "Error al eliminar Producto." });
    }
  },
  listUser: (req, res) => {
    db.User.findAll()
      .then(user => {
        res.render("userListAdmin", { user });
      })
      .catch(error => {
        res.send({ result: 'Error', payload: error })
      })
  },
  updateUser: async (req, res) => {
    const enteredUser = req.params.id; 
    try {
      let userInfo = await db.User.findOne({ where: { idUser: enteredUser } })
        console.log('el usuario es : ' , userInfo)
        res.render('editUserAdmin', { userInfo: userInfo });
     }

     catch (error) {
      res.status(500).send('Error interno del servidor');
    }
  }, 
  editUser: async (req, res) => {
    const userId = req.params.id;
    const {image,  fullname, email, rol} = req.body;
    try {
      // Obtén el usuario de la base de datos
      const user = await db.User.findByPk(userId);
      // Verifica si el rol ha cambiado
      if (user.rol !== rol) {
            // Actualiza solo el rol
            await db.User.update({ rol: rol }, { where: { idUser: userId } });
           
          }         
      res.redirect('/admin/userListAdmin'); // Redirige a la página correspondiente después de guardar cambios
    } catch (error) {
        console.error('Error al editar usuario:', error);
        res.status(500).send('Error interno del servidor');
  }
  },
  eliminar: async (req, res) => {
    try {
    const userId = req.params.id;
    console.log('La función eliminar se está ejecutando. Usuario ID:', userId);
    const foundUser = await db.User.findOne({ where: { idUser: userId } });
    console.log('Usuario encontrado:', foundUser);
    if (foundUser) {
      const deleteResult = await db.User.destroy({ where: { idUser: foundUser.idUser } });
      console.log('Resultado de eliminación:', deleteResult);
      if (deleteResult > 0) {
        console.log('Usuario eliminado con éxito.');
        res.redirect ('/admin/userListAdmin')
       } else {
        console.log('Usuario no encontrado o no se pudo eliminar.');
       }
        }     
    } catch (error) {
      res.status(500).json({ success: false, message: "Error al eliminar usuario." });
    }
  }

};

module.exports = adminController;
