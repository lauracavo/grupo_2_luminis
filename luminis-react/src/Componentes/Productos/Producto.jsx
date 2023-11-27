import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getConsultas from '../../Conexiones/getConsultas';
import './productoStyle.css';

function Producto(props) {
    const [producto, modProducto] = useState({});
    let barra = useParams();

    //component did mount
    useEffect(() => {
        getConsultas.getProducto(barra.id).then(prod => { modProducto(prod); })
    }, [barra.id]);

    return (
        <React.Fragment>
            <article className="productDetail">
                <div className='productHead'>
                    <div>
                        <img className='imagenProd' src={`/img/productosImagenes/${producto.imagen}`} alt='imagen del producto' />
                    </div>
                    <ul className="productStats">
                        <li className="productName">{producto.nombre}</li>
                        <li className="productPrice">{producto.precio}</li>
                    </ul>
                </div>
                <p className="productDescription">{producto.descripcion}</p>
            </article>
        </React.Fragment>
    );
}

export default Producto;