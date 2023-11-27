import React from 'react';
import '../card.css';
import { Link } from 'react-router-dom';
import './estilo.css';

function Row(props) {
    return (
        <React.Fragment>
            <Link to={`/productos/${props.elemento.id}`}>
            <div className='fila'>
                <div className='imagen celda'><img className='imagen' src={`/img/productosImagenes/${props.elemento.imagen}`} alt='producto'/></div>
                <div className='nombre celda'>{props.elemento.nombre}</div>
                <div className='celda'>${props.elemento.precio}</div>
            </div>
            </Link>
        </React.Fragment>
    );
}


export default Row;

