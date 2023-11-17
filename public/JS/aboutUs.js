const photoOne = document.querySelector('#photoOne');
const photoTwo = document.querySelector('#photoTwo');
const photoThree = document.querySelector('#photoThree');
const photoFour = document.querySelector('#photoFour');
const photoFive = document.querySelector('#photoFive');
const photoSix = document.querySelector('#photoSix');

const descOne = document.querySelector('#descOne');
const descTwo = document.querySelector('#descTwo');
const descThree = document.querySelector('#descThree');
const descFour = document.querySelector('#descFour');
const descFive = document.querySelector('#descFive');
const descSix = document.querySelector('#descSix');

document.addEventListener('DOMContentLoaded', function () {
    // Obtén todas las imágenes y descripciones
    const photos = document.querySelectorAll('.photo');
    const descriptions = document.querySelectorAll('.description');
  
    // Añade un event listener a cada imagen
    photos.forEach(function (photo) {
      photo.addEventListener('click', function () {
        // Muestra la descripción correspondiente a esta imagen
        const description = photo.nextElementSibling;
        toggleDescription(description);
      });
    });
  
    // Añade un event listener al documento para cerrar las descripciones al hacer clic fuera de las imágenes
    document.addEventListener('click', function (event) {
      // Verifica si se hizo clic dentro de una descripción
      const isDescriptionClick = Array.from(descriptions).some(function (description) {
        return description.contains(event.target);
      });
  
      // Oculta todas las descripciones si no se hizo clic dentro de una descripción
      if (!isDescriptionClick) {
        hideAllDescriptions();
      }
    });
  
    // Función para alternar la visibilidad de una descripción
    function toggleDescription(description) {
      // Oculta todas las descripciones
      hideAllDescriptions();
  
      // Muestra u oculta la descripción según su estado actual
      description.style.display = (description.style.display === 'block') ? 'none' : 'block';
    }
  
    // Función para ocultar todas las descripciones
    function hideAllDescriptions() {
      descriptions.forEach(function (description) {
        description.style.display = 'none';
      });
    }
  });

