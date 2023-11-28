//Validaciones de Registro desde el Front
//Capturamos los elementos del formulario
const form = document.querySelector('#formRegister');
const oldPasswordInput = document.querySelector('#oldPassword');
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

const validateOldPassword = () => {
    const oldPasswordValue = oldPasswordInput.value.trim();
    if (oldPasswordValue === '') {
        setError(oldPasswordInput, 'Debe ingresar una contraseña');
        return false;
    } else {
        setSuccess(oldPasswordInput);
        return true;
    }
};

//Creamos un evento input para validar los campos
oldPasswordInput.addEventListener('input', validateOldPassword);
passwordInput.addEventListener('input', validatePassword);
passwordRInput.addEventListener('input', validatePasswordR);

form.addEventListener('submit', function (e) {
    // Validar cada campo
    const oldPasswordValid = validateOldPassword();
    const passwordValid = validatePassword();
    const passwordRValid = validatePasswordR();

    // Verificar si hay errores en alguno de los campos
    if (!oldPasswordValid || !passwordValid || !passwordRValid) {
        // Si hay errores, prevenimos el envío del formulario
        e.preventDefault();
    }


    Swal.fire({
        title: '¡Felicitaciones!',
        text: '¡La contraseña fue cambiada con éxito!',
        icon: 'success',
        confirmButtonText: '<a href="/users/userProfile">Volver al perfil</a>'
    })
});

//Creamos las diferentes opciones que se escribirán en la animación, su orden y velocidad de typeo 
const options = {
    strings: ['¿Asi que vas a cambiar la contraseña? 😬',
    '¿Alguna razón en especial? 🤔',
    'Espero que recuerdes las condiciones 🙄',
    'Y sinó, ¡Están justo abajo del campo! 🧐👉',],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 2000,
  };
  
//Anclamos la animación a la clase .typed
  let typed = new Typed('.typed', options);

