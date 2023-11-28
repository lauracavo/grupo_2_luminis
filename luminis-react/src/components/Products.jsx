/**
 * 
 * useState: Nos permite manejar estados en el componente, donde al cambiar vuelve a renderizar
 * el componente para reflejar en la interfaz ese  cambio 
 * 
 * useEffect: Ejecutar efectos - Hook que nos permite ejecutar codigo arbitrario ( lo que quieras )
 * cuando se monta el componente en el DOM y/o cambian sus dependencias
 */

import { useEffect, useState } from "react";

function Products() {
  const initialState = {
    page: 1,
    limit: 5,
    offset: 0,
  };

  const [ProductsList, setProductsList] = useState([]);
  const [paging, setPaging] = useState(initialState);

  const getProducts = async () => {
    const resp = await fetch('http://localhost:2020/api/products/');
    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    getProducts().then(({ data }) => setProductsList(data));
  }, [paging.page]);

  const handleNext = () => {
    setPaging({
      page: paging.page + 1,
      limit: paging.limit || 5,
      offset: paging.limit * (paging.page),
    });
  };

  if (ProductsList.length === 0) {
    return <h2>Cargando</h2>;
  }

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <ul>
        {ProductsList.map((elem, i) => {
          return (
            i >= paging.offset &&
            i < paging.offset + paging.limit && (
              <li key={i}>{elem.title}</li>
            )
          );
        })}
      </ul>
      <div>
        <span>{paging.page}</span>
      </div>
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
}

export default Products;
