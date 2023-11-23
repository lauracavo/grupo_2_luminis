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
    const { id } = id.params;
    const foundProduct = await db.Product.findOne({where: { idProduct: parseInt(id)}})
    try {
      await db.Product.destroy({ where: { idProduct: foundProduct.id } });
      res.json({ success: true, message: "Producto eliminado con éxito." });
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

};

module.exports = adminController;
