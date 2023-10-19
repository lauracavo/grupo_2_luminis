//Creamos las diferentes opciones que se escribirán en la animación, su orden y velocidad de typeo 
const options = {
    strings: ['¿Hola?... 🤨',
    'No te veo en nuestra base de datos 🤔',
    'Debe ser tu primera visita 😲',
    '¿Porque no te registras? 😅',
    'Seguramente encontrás algo que te guste 😉',
    '¡BIENVENIDO A LUMINIS! 😊'],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 2000,
  };
  //Anclamos la animación a la clase .typed
  let typed = new Typed('.typed', options);

  //Seteamos el estado del codigo promocional en 0
  let promoCode = 0;

  //Capturamos el input "code"
  const code = document.querySelector('#code');

  //Agregamos un evento "keydown" a "code", para que escuche cada vez que se presiona una tecla
  code.addEventListener('keydown', function(e){
    const pressedKey = e.key.toLowerCase();

  //Creamos las condiciones para que el codigo promocional solo funcione si se presionan las
  //teclas correctas en el orden correspondiente y que 
  //el progreso se guarde en la variable "promoCode".
  if (promoCode === 0 && pressedKey === 'l') {
    promoCode = 1;
  } else if (promoCode === 1 && pressedKey === 'u') {
    promoCode = 2;
  } else if (promoCode === 2 && pressedKey === 'm') {
    promoCode = 3;
  } else if (promoCode === 3 && pressedKey === 'i') {
    promoCode = 4;
  } else if (promoCode === 4 && pressedKey === 'n') {
    promoCode = 5;
  } else if (promoCode === 5 && pressedKey === 'i') {
    promoCode = 6;
  } else if (promoCode === 6 && pressedKey === 's') {
    promoCode = 0;
    Swal.fire({
      background: '#ffffff54',
      title: '¡Felicitaciones!',
      text: '¡Se han activado los descuentos y articulos especiales para docentes!',
      icon: 'success',
      confirmButtonText: '¡Excelente!'
    })
    //alert('¡Felicitaciones, se han activado los descuentos y articulos especiales para docentes!')
  } else {
    promoCode = 0;
  }
})



