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

