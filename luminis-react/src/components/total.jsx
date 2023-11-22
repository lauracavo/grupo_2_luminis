import React from 'react';

const TotalPanel = ({ type }) => {
  // Lógica para obtener el total según el tipo (productos, usuarios, categorías)
  const total = 10; // Reemplaza esto con tu lógica real

  return (
    <div>
      <h2>Total de {type}: {total}</h2>
    </div>
  );
};

export default TotalPanel;
