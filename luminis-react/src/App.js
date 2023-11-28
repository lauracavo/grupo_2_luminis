import React  from "react";
import "./App.css";
import Products from "./components/Products";
import LastProducts from "./components/LastProducts";
import Category from "./components/Category"
import ContentRowTop from "./components/ContentRowTop";
import Counter from "./components/Counter";
function App() {

  return (
    <div>
      <Products/>
      <LastProducts/>
      <Category/>
      <ContentRowTop/>
      <Counter/>
      
    </div>
  )
}

export default App
