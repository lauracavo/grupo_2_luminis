//Validaciones de Login desde el Front
//Capturamos los elementos del formulario
const form = document.querySelector('#formLogin');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

//Creamos setError, una función de ayuda para manejar los mensajes de error
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

//Creamos setSuccess, una función de ayuda para cambiar la clase error a success si no hay errores
const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  
  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

//Función para revisar si el email es de formato válido
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Validación del campo email
const validateEmail = () => {
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    setError(emailInput, 'Debe ingresar un email');
    return false;
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, 'El email ingresado debe tener un formato valido');
    return false;
  } else {
    setSuccess(emailInput);
    return true;
  }
};

// Validación del campo password
const validatePassword = () => {
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === '') {
    setError(passwordInput, 'Debe ingresar una contraseña');
    return false;
  } else {
    setSuccess(passwordInput);
    return true;
  }
};

//Creamos un evento input para validar los campos
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

//Agregamos un evento 'submit' al formulario con un preventDefault
//y ejecutamos cada una de las validaciones
form.addEventListener('submit', function(e) {
  // Validar cada campo
  const emailValid = validateEmail();
  const passwordValid = validatePassword();

  // Verificar si hay errores en alguno de los campos
  if (!emailValid || !passwordValid) {
    // Si hay errores, prevenimos el envío del formulario
    e.preventDefault();
  }
});

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