import React from 'react';
import Row from './Row';
function Tabla(props) {
    return (
        <React.Fragment>
            <div className='tabla'>
                <div className='titulos'>
                    <div className='celda'>Imagen</div>
                    <div className='celda'>Nombre</div>
                    <div className='celda'>Precio</div>
                </div>
                {props.productos && Array.isArray(props.productos) && props.productos.map(producto => (
                    <Row elemento={producto} key={`producto${producto.id}`} />
                ))}
            </div>
        </React.Fragment>
    );
}

export default Tabla;


