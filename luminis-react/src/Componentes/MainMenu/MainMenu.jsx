import React, { useEffect, useState } from 'react';
import {                                            //redireccionamiento
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './MainStyle.css';
import getConsultas from '../../Servicios/getConsultas';
import Categorias from '../Categorias/Categorias';
import Productos from '../Productos/Productos';
import Producto from '../Productos/Producto';

export default function MainMenu() {
    const [categorias, modCategorias] = useState([]);
    const [productos, modProductos] = useState([]);
    const [usuarios, modUsuarios] = useState();

    //component did mount
    useEffect(() => {
        getConsultas.getCategorias().then(cat => { modCategorias(cat || []); });
        getConsultas.getProductos().then(prod => { modProductos(prod || []); });
        getConsultas.getUsuarios().then(user => { modUsuarios(user || 0); });
    }, []);
    

    return (
        <Router>
            <section className="info-boxes">
                <Link to='/categorias'>
                    <div className="info-box">
                        <div className="box-icon">
                            <i className="fas fa-folder fa-xl"></i>
                        </div>

                        <div className="box-content">
                            Categorias existentes
                            <span className="big">{categorias.length}</span>
                        </div>
                    </div>
                </Link>
                <Link to='/productos'>
                    <div className="info-box">
                        <div className="box-icon">
                            <i className="fas fa-box-open"></i>
                        </div>

                        <div className="box-content">
                            Cantidad de productos
                            <span className="big">{productos.length}</span>
                        </div>
                    </div>
                </Link>
                <Link to='/usuarios'>
                    <div className="info-box active">
                        <div className="box-icon">
                            <i className="fas fa-user"></i>
                        </div>

                        <div className="box-content">
                            Cantidad de usuarios registrados
                            <span className="big">{usuarios}</span>
                        </div>
                    </div>
                </Link>
            </section>
            <Routes>
                <Route path="/categorias/*" element={<Categorias cat={categorias} key="categorias"></Categorias>}></Route>
                <Route path="/productos/" element={<Productos key="productos"></Productos>}></Route>
                <Route path="/productos/:id" element={<Producto key="producto"></Producto>}></Route>
            </Routes>
        </Router>
    );
}