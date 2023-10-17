//Creamos las diferentes opciones que se escribirán en la animación, su orden y velocidad de typeo 
const options = {
    strings: ['¡HOLA DE NUEVO! 😁',
    'Sabia que volverias... 😎',
    '¿Que vas a comprar hoy? 🤔',
    'Tenemos nuevos articulos y promos 🤩',
    'Hoy es un buen día para comprar, ¿No? 🤭',
    '¡BIENVENIDO A LUMINIS! 😊'],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 2000,
  };
  
  
  //Anclamos la animación a la clase .typed
  let typed = new Typed('.typed', options);