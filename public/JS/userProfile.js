    const usuarioLink = document.getElementById('usuarioLink');
    const facturacionLink = document.getElementById('facturacionLink');
    const datosUsuariosDiv = document.getElementById('datos_usuarios');
    const datosFacturacionDiv = document.getElementById('datos_compras');

    // Mostrar el div de datos de usuario por defecto
    datosUsuariosDiv.style.display = 'block';
    datosFacturacionDiv.style.display = 'none';

    usuarioLink.addEventListener('click', () => {
      datosUsuariosDiv.style.display = 'block';
      datosFacturacionDiv.style.display = 'none';
    });

    facturacionLink.addEventListener('click', () => {
      datosUsuariosDiv.style.display = 'none';
      datosFacturacionDiv.style.display = 'block';
    });
