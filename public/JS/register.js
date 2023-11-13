//Validaciones de Registro desde el Front
//Capturamos los elementos del formulario
const form = document.querySelector('#formRegister');
const fullNameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordRInput = document.querySelector('#passwordR');

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

//Validación del campo fullName
const validateFullName = () => {
  const fullNameValue = fullNameInput.value.trim();
  if (fullNameValue === '') {
    setError(fullNameInput, 'Debe ingresar un nombre y un apellido');
    return false;
  } else if (fullNameValue.length < 8) {
    setError(fullNameInput, 'Debe ingresar al menos 8 caracteres');
    return false;
  } else {
    setSuccess(fullNameInput);
    return true;
  }
};
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

//Capturamos elementos necesarios para validar el campo password, en este caso las condiciones
const passwordConditions = document.querySelector('.password-conditions');
const conditionLength = document.getElementById('condition-length');
const conditionUppercase = document.getElementById('condition-uppercase');
const conditionDigit = document.getElementById('condition-digit');

//Validación del campo password
const validatePassword = () => {
  const passwordValue = passwordInput.value.trim();
  const hasUppercase = /[A-Z]/.test(passwordValue);
  const hasDigit = /\d/.test(passwordValue);

  if (passwordValue === '') {
    setError(passwordInput, 'Debe ingresar una contraseña');
    conditionLength.style.color = 'black';
    conditionUppercase.style.color = 'black';
    conditionDigit.style.color = 'black';
    return false;
  } else if (passwordValue.length < 8 || !hasUppercase || !hasDigit) {
    setError(passwordInput, '');

    conditionLength.style.color = passwordValue.length >= 8 ? 'green' : 'red';
    conditionUppercase.style.color = hasUppercase ? 'green' : 'red';
    conditionDigit.style.color = hasDigit ? 'green' : 'red';

    return false;
  } else {
    setSuccess(passwordInput);
    conditionLength.style.color = 'green';
    conditionUppercase.style.color = 'green';
    conditionDigit.style.color = 'green';
    return true;
  }
};


//Validación del campo passwordR
const validatePasswordR = () => {
  const passwordValue = passwordInput.value.trim();
  const passwordRValue = passwordRInput.value.trim();
  if (passwordRValue === '') {
    setError(passwordRInput, 'Debe confirmar su contraseña');
    return false;
  } else if (passwordRValue !== passwordValue) {
    setError(passwordRInput, 'Las contraseñas no coinciden');
    return false;
  } else {
    setSuccess(passwordRInput);
    return true;
  }
};

//Creamos un evento input para validar los campos
fullNameInput.addEventListener('input', validateFullName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
passwordRInput.addEventListener('input', validatePasswordR);


//Agregamos un evento 'submit' al formulario con un preventDefault
//y ejecutamos cada una de las validaciones
form.addEventListener('submit', function (e) {
  // Validar cada campo
  const fullNameValid = validateFullName();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();
  const passwordRValid = validatePasswordR();

  // Verificar si hay errores en alguno de los campos
  if (!fullNameValid || !emailValid || !passwordValid || !passwordRValid) {
    // Si hay errores, prevenimos el envío del formulario
    e.preventDefault();
  }
});


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
code.addEventListener('keydown', function (e) {
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



