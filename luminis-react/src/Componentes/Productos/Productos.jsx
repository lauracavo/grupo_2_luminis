import React, { useEffect, useState } from 'react';
import Tabla from '../Tabla/Tabla';
import getConsultas from '../../Servicios/getConsultas';

function ProductosCategoria(props) {
    const [productos, modProductos] = useState([]);
    //component did mount
    useEffect(() => {
        getConsultas.getProductos().then(prod => { modProductos(prod); })
    }, []);

    return (
        <React.Fragment>
            <div>
                <Tabla productos={productos} key={`Tabla`} />
            </div>

        </React.Fragment>
    );
}

export default ProductosCategoria;