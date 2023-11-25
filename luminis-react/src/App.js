import React from "react";
import CategoryPanel from "./components/CategoryPanel";
import Dashboard from "./components/Dashboard";
import ProductListPanel from "./components/ProductList";
import DetailPanel from "./components/Detail";
import TotalPanel from "./components/Total";

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
      </header>
      <main>
        <Dashboard/>
        <CategoryPanel/>
        <ProductListPanel />
        <DetailPanel/>
        <TotalPanel/>
      </main>
    </div>
  );
}

export default App;
