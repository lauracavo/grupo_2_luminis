import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [latestItem, setLatestItem] = useState(null);
  const [categoriesWithProducts, setCategoriesWithProducts] = useState([]);
  const [productList, setProductList] = useState([]);

  // Función para obtener datos de la API
  const fetchData = async () => {
    try {
      // Utiliza la API Fetch para hacer las solicitudes HTTP
      const productResponse = await fetch('./api/products');
      const userResponse = await fetch('/api/users');
      const categoryResponse = await fetch('/api/categories');

      // Convierte las respuestas a objetos JSON
      const productData = await productResponse.json();
      const userData = await userResponse.json();
      const categoryData = await categoryResponse.json();

      // Actualiza los estados con los datos obtenidos
      setTotalProducts(productData.total);
      setTotalUsers(userData.total);
      setTotalCategories(categoryData.total);
      setLatestItem(productData.latestItem);

       // Crea un mapa para contar los productos por categoría de manera eficiente
      const productsByCategory = productData.products.reduce((map, product) => {
      const categoryId = product.category;
      map[categoryId] = (map[categoryId] || 0) + 1;
      return map;
    }, {});

    // Crea un nuevo array con el total de productos por categoría
      const categoriesData = categoryData.categories.map(category => ({
      name: category.name,
      totalProducts: productsByCategory[category.id] || 0,
    }));

      setCategoriesWithProducts(categoriesData);

       // Almacena la lista completa de productos
      setProductList(productData.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Usa useEffect para llamar a fetchData cuando el componente se monte
    useEffect(() => {
      fetchData();
  }, []);

  return (
    <div>
     
      <div>Total de productos: {totalProducts}</div>
      <div>Total de usuarios: {totalUsers}</div>
      <div>Total de categorías: {totalCategories}</div>
      {/* Panel de detalle del último producto o usuario creado */}

      <div>
        <h2>Último Producto o Usuario Creado:</h2>
        {latestItem && (
          <div>
            <p>ID: {latestItem.id}</p>
            <p>Nombre: {latestItem.name}</p>
          </div>
        )}
      </div>

    
      <div>
        <h2>Total de Productos por Categoría:</h2>
        {categoriesWithProducts.map(category => (
          <div key={category.name}>
            <p>Categoría: {category.name}</p>
            <p>Total de Productos: {category.totalProducts}</p>
          </div>
        ))}
      </div>

      
      <div>
        <h2>Listado de Productos:</h2>
        <ul>
          {productList.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
