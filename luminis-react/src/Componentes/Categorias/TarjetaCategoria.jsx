import React from 'react';
import { NavLink } from 'react-router-dom';

function Categorias(props) {
    return (
        <React.Fragment>
            <NavLink to={`/categorias/${props.id}`} >
                <div className='categoryCard' id={`carta${props.id}`}>
                    <div className="tarjeta">
                        <div>{props.nombre}</div>
                        <div>Productos: {props.cant}</div>
                    </div>
                </div>
            </NavLink>
        </React.Fragment>
    );
}

export default Categorias;