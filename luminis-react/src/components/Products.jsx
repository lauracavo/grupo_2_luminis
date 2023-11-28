import { useEffect, useState } from "react";

function Products() {
  const initialState = {
    page: 1,
    limit: 5,
  };

  const [ProductsList, setProductsList] = useState([]);
  const [paging, setPaging] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const resp = await fetch('http://localhost:2020/api/products/');
      const data = await resp.json();
      setProductsList(data.data); // Ajusta esto según la estructura real de tus datos
    } catch (error) {
      console.error('Error al obtener productos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, [paging.page]);

  if (isLoading) {
    return <h2>Cargando</h2>;
  }

  if (!ProductsList || ProductsList.length === 0) {
    return <h2>No hay productos disponibles</h2>;
  }

  const startIndex = (paging.page - 1) * paging.limit;
  const slicedProducts = ProductsList.slice(startIndex, startIndex + paging.limit);

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <ul>
        {slicedProducts.map((elem, i) => (
          <li key={i}>{elem.title}</li>
        ))}
      </ul>
      <div>
        <span>{paging.page}</span>
      </div>
      <button onClick={() => setPaging(prevState => ({ ...prevState, page: prevState.page + 1 }))}>
        Siguiente
      </button>
    </div>
  );
}

export default Products;
