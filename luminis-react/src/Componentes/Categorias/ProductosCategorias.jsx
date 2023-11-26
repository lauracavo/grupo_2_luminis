import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import Tabla from '../Tabla/Tabla';
import getConsultas from '../../Servicios/getConsultas';

function ProductosCategoria(props) {
    const [productosCategorias, modProductosCategorias] = useState([]);
    let barra = useParams();

    //component did mount
    useEffect(() => {
        getConsultas.getProductosCategoria(barra.id).then(prod => { modProductosCategorias(prod); })
        console.log('cambio el id a' + barra.id);
    }, [barra.id]);

    return (
        <div>
            <Tabla productos={productosCategorias} key={`Tabla`} />
        </div>
    );
}

export default ProductosCategoria;