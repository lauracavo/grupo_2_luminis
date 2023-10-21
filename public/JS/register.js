//Validaciones del formulario de Registro

//Capturamos lo necesario
const form = document.querySelector('#prueba');
const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordR = document.querySelector('#passwordR');
let errorCounter = 0;

//Aplicamos un evento PreventDefault al formulario para evitar que se envie
//y poder realizar las validaciones
form.addEventListener('submit', function(e){
  console.log(form);
  e.preventDefault();
  validateInputs();
  
});

//Creamos la función setError y setSuccess, que ayudaran a alternar mas facilmente entre los estilos
//para cuando hay errores y cuando esta todo correcto
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
  errorCounter ++;
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

//Validacion extra para email, que confirme si es un tipo de email valido
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Ahora creamos la función para validar los inputs
//Primero capturamos los valores de esos inputs
//Y usamos .trim para eliminar posibles espacios en blanco delante o atras de los valores
const validateInputs = () => {
  errorCounter = 0;
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordRValue = passwordR.value.trim();

  if(fullNameValue === '') {
    setError(fullName, 'Debe ingresar un nombre y un apellido');
  } else if (fullNameValue.length < 8 ) {
    setError(fullName, 'Debe ingresar al menos 8 caracteres');
  } else {
    setSuccess(fullName);
  };

  if(emailValue === '') {
    setError(email, 'Debe ingresar un email');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'El email ingresado debe tener un formato valido');
  } else {
    setSuccess(email);
  };

  if(passwordValue === '') {
    setError(password, 'Debe ingresar una contraseña');
  } else if (passwordValue.length < 8 ) {
    setError(password, 'La contraseña debe tener al menos 8 caracteres')
  } else {
    setSuccess(password);
  };

  if(passwordRValue === '') {
    setError(passwordR, 'Debe confirmar su contraseña');
  } else if (passwordRValue !== passwordValue) {
    setError(passwordR, 'Las contraseñas no coinciden');
  } else {
    setSuccess(passwordR);
  };
};

































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



