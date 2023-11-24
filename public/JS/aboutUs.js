//Capturamos todas las fotos y descripciones
const photos = document.querySelectorAll('.photo');
const descs = document.querySelectorAll('.description');
const iconContainers = document.querySelectorAll('.iconContainer');

//Función para mostrar el texto
function showText(descElement) {
  descElement.style.display = 'block';
}

//Función para ocultar el texto
function hideText(descElement) {
  descElement.style.display = 'none';
}

photos.forEach((photo, index) => {
  photo.addEventListener('click', function (event) {
    //Elimina la clase 'active' de todas las fotos y descripciones
    photos.forEach(p => p.classList.remove('active'));
    descs.forEach(d => d.classList.remove('active'));
    iconContainers.forEach(ic => ic.classList.remove('active'));

    //Agrega la clase 'active' a la foto y descripción clicadas
    photo.classList.add('active');
    descs[index].classList.add('active');
    iconContainers[index].classList.add('active');
  });
});

//Agrega un evento de clic a cada foto
photos.forEach((photo, index) => {
  photo.addEventListener('click', function (event) {
    //Muestra el texto correspondiente a la foto clicada
    showText(descs[index]);

    //Agrega un evento de clic al documento para ocultar el texto al hacer clic fuera de la foto
    function hideDescOnOutsideClick(e) {
      //Comprueba si el clic no ocurrió en la foto ni en sus descendientes
      if (!photo.contains(e.target)) {
        //Oculta el texto
        hideText(descs[index]);

        

        //Remueve el evento de clic del documento después de ocultar el texto
        document.removeEventListener('click', hideDescOnOutsideClick);
      }
    }

    //Agrega el evento de clic al documento
    document.addEventListener('click', hideDescOnOutsideClick);
  });
});

//Agrega un evento de clic al documento para ocultar los iconos al hacer clic fuera de las imágenes
document.addEventListener('click', function hideIconsOnOutsideClick(e) {
  //Comprueba si el clic no ocurrió en el icon container ni en sus descendientes
  if (!iconContainers[0].contains(e.target) && !iconContainers[1].contains(e.target)) {
    //Oculta los iconos
    iconContainers.forEach(ic => ic.classList.remove('active'));

    //Remueve el evento de clic del documento después de ocultar los iconos
    document.removeEventListener('click', hideIconsOnOutsideClick);
  }
});

