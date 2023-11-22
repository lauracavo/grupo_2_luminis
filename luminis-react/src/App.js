import React from "react";
import Category from "./components/category";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
      </header>
      <main>
        <Dashboard/>
        <Category/>
        <productList/>
        <detail/>
        <total/>
      </main>
    </div>
  );
}

export default App;
