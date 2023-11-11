
    const nameInput = document.querySelector('#name');
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

      //Validación del campo name
const validatename = () => {
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
      setError(nameInput, 'Debe ingresar un nombre y un apellido');
      return false;
    } else if (nameValue.length < 8) {
      setError(nameInput, 'Debe ingresar al menos 8 caracteres');
      return false;
    } else {
      setSuccess(nameInput);
      return true;
    }
  };
  //Creamos un evento input para validar los campos
nameInput.addEventListener('input', validatename);
//Agregamos un evento 'submit' al formulario con un preventDefault
//y ejecutamos cada una de las validaciones
form.addEventListener('submit', function(e) {
    // Validar cada campo
    const nameValid = validatename();
    // Verificar si hay errores en alguno de los campos
  if (!nameValid){
    // Si hay errores, prevenimos el envío del formulario
    e.preventDefault();
  }
  });
