//Validaciones de edicion desde el Front
//Capturamos los elementos del formulario
const form = document.querySelector('#formEdit');
const fullNameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordRInput = document.querySelector('#passwordR');
const addressInput = document.querySelector('#address');
const cellPhoneInput = document.querySelector('#cellPhone');
const cityInput = document.querySelector('#city');
const cpInput = document.querySelector('#cp');
const provinceInput = document.querySelector('#province')
const profile_imageInput= document.querySelector('#profile_image')

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
  } else if (fullNameValue.length < 8) {
    setError(fullNameInput, 'Debe ingresar al menos 8 caracteres');
  } else {
    setSuccess(fullNameInput);
  }
};

//Validación del campo Direccion
const validateAddress = () => {
    const addressValue = addressInput.value.trim();
    if (addressValue === '') {
      setError(addressInput, 'Debe ingresar una direccion');
    } else {
      setSuccess(addressInput);
    }
  };

//Validación del campo Ciudad
const validateCity = () => {
    const cityValue = cityInput.value.trim();
    if (cityValue === '') {
      setError(cityInput, 'Debe ingresar una ciudad');
    } else {
      setSuccess(cityInput);
    }
  };

//Validación del campo Provincia
const validateProvince = () => {
    const provinceValue = provinceInput.value.trim();
    if (provinceValue === '') {
      setError(provinceInput, 'Debe ingresar una provincia');
    } else {
      setSuccess(provinceInput);
    }
  };  

//Validacion de telefono
  const validateCellPhone = () => {
    const cellPhoneValue = cellPhoneInput.value.trim();
    if (cellPhoneValue === '') {
      setError(cellPhoneInput, 'Debe ingresar un numero valido');
    } else if (cellPhoneValue.length >= 10 && cellPhoneValue.length <= 16) {
      setError(cellPhoneInput, 'Debe ingresar un numero de celular con 10 caracteres minimo y 16 maximo');
    } else {
      setSuccess(cellPhoneInput);
    }
  };

  //Validacion de codigo postal
  const validateCp = () => {
    const cpValue = cpInput.value.trim();
    if (cpValue === '') {
      setError(cellPhoneInput, 'Debe ingresar un numero valido');
    } else if (cellPhoneValue.length == 4 ) {
      setError(cellPhoneInput, 'Debe ingresar un numero de celular con 10 caracteres minimo y 16 maximo');
    } else {
      setSuccess(fullNameInput);
    }
  };

//Validación del campo email
const validateEmail = () => {
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    setError(emailInput, 'Debe ingresar un email');
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, 'El email ingresado debe tener un formato valido');
  } else {
    setSuccess(emailInput);
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
  } else if (passwordValue.length < 8) {
    setError(passwordInput, '');
    conditionLength.style.color = 'red';
    conditionUppercase.style.color = 'black';
    conditionDigit.style.color = 'black';
  } else {
    setSuccess(passwordInput);
    conditionLength.style.color = 'green';

    if (hasUppercase) {
      conditionUppercase.style.color = 'green';
    } else {
      conditionUppercase.style.color = 'red';
    }

    if (hasDigit) {
      conditionDigit.style.color = 'green';
    } else {
      conditionDigit.style.color = 'red';
    }
  }
};

//Validación del campo passwordR
const validatePasswordR = () => {
  const passwordValue = passwordInput.value.trim();
  const passwordRValue = passwordRInput.value.trim();
  if (passwordRValue === '') {
    setError(passwordRInput, 'Debe confirmar su contraseña');
  } else if (passwordRValue !== passwordValue) {
    setError(passwordRInput, 'Las contraseñas no coinciden');
  } else {
    setSuccess(passwordRInput);
  }
};

//Creamos un evento input para validar los campos
fullNameInput.addEventListener('input', validateFullName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
passwordRInput.addEventListener('input', validatePasswordR);

//Agregamos un evento 'submit' al formulario con un preventDefault
//y ejecutamos cada una de las validaciones
form.addEventListener('submit', function(e){
  e.preventDefault();
  validateFullName();
  validateEmail();
  validatePassword();
  validatePasswordR();
  validateAddress();
  validateCity();
  validateProvince();
});

//marca o desmarca la casilla de verificación "Habilitar Datos de Facturación"
function toggleShippingForm() {
  var secondForm = document.getElementById('secondForm');
  var enableShipping = document.getElementById('enableShipping');
  if (enableShipping.checked) {
    secondForm.style.display = 'block';
  } else {
    secondForm.style.display = 'none';
  }
  enableSaveButton();
}

//habilitar o deshabilitar el botón "Guardar cambios"
function enableSaveButton() {
  document.getElementById('submit_update').disabled = false;
}