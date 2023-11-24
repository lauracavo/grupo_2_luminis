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

// Función para cerrar todas las imágenes
function closeAllImages() {
  photos.forEach(p => p.style.filter = 'grayscale(100%)');
  descs.forEach(d => d.style.display = 'none');
  iconContainers.forEach(ic => ic.classList.remove('visible'));
}

photos.forEach((photo, index) => {
  photo.addEventListener('click', function (event) {
    photos.forEach(p => p.style.filter = 'grayscale(100%)');
    descs.forEach(d => d.style.display = 'none');
    photo.style.filter = 'grayscale(0%)';
    descs[index].style.display = 'block';
    descs[index].style.transform = 'scale(0)';
    descs[index].style.transition = 'all 0.5s ease';
    setTimeout(function () {
      descs[index].style.transform = 'scale(1)';
    },0);
    iconContainers.forEach(ic => ic.classList.remove('visible'));
    iconContainers[index].classList.add('visible');
  });
});

// Evento para cerrar todas las imágenes al hacer clic fuera de ellas
document.addEventListener('click', function (event) {
  const isClickInsidePhoto = event.target.closest('.photo');
  if (!isClickInsidePhoto) {
    closeAllImages();
  }
});

