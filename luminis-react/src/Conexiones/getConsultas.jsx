const responder = async apiResponse => {
    const { data } = apiResponse;
    return data;
}
const buscar = async (link) => {
    return await fetch(`/api/2020/api/products`)
        .then(respuesta => respuesta.json())
        .then(responder)
        .catch(error => console.log(error))
}

module.exports = {
    getCategorias: async () => {
        return await buscar('categorias/cantidad');
    },
    getProductos: async () => {
        return await buscar('products');
    },
    getUsuarios: async () => {
        return await buscar('usuarios');
    },
    getProductosCategoria: async(id) => {
        return await buscar(`categorias/${id}`);
    },
    getProducto: async(id) => {
        return await buscar(`productos/${id}`);
    },
}