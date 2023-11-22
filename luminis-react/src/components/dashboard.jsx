import React from 'react';
import TotalPanel from './total';
import DetailPanel from './detail';
import CategoryPanel from './category';
import ProductListPanel from './productList';

const Dashboard = () => {
  return (
    <div>
      <TotalPanel type="products" />
      <TotalPanel type="users" />
      <TotalPanel type="categories" />

      <DetailPanel />

      <CategoryPanel />

      <ProductListPanel />
    </div>
  );
};

export default Dashboard;
