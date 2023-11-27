import React from 'react';
import './CategoriaStyle.css';
import {Route, Routes } from 'react-router-dom';
import Tarjeta from './TarjetaCategoria';
import ProductosCategoria from './ProductosCategorias';


function Categorias(props) {

    return (
        <React.Fragment>
            <div className="contenedor shadow">
                {props.cat.map(el => { return <Tarjeta id={el.id} nombre={el.nombre} cant={el.cant} key={`categoria${el.id}`} /> })}
            </div>
            <Routes>
                <Route path=":id" element={<ProductosCategoria key="mostarCategorias"></ProductosCategoria>} />
            </Routes>
        </React.Fragment>
    );
}

export default Categorias;