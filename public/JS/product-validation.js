
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

<<<<<<< HEAD
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
=======
        // Validación para el campo "detail"
        const detailField = document.querySelector('textarea[name="detail"]');
        if (detailField.value.trim() === '') {
            alert('El campo "Detalle" no puede estar vacío.');
            detailField.focus();
            isValid = false;
        }

        // Validación para el campo "characteristic"
        const characteristicField = document.querySelector('input[name="characteristic"]');
        if (characteristicField.value.trim() === '') {
            alert('El campo "Característica" no puede estar vacío.');
            characteristicField.focus();
            isValid = false;
        }

        // Validación para el campo "idCategory"
        const idCategoryField = document.querySelector('input[name="idCategory"]');
        if (idCategoryField.value.trim() === '') {
            alert('El campo "Categoría" no puede estar vacío.');
            idCategoryField.focus();
            isValid = false;
        }

        // Validación para el campo "purchasePrice"
        const purchasePriceField = document.querySelector('input[name="purchasePrice"]');
        if (purchasePriceField.value.trim() === '' || isNaN(parseFloat(purchasePriceField.value))) {
            alert('El campo "Precio de Compra" debe ser un número válido.');
            purchasePriceField.focus();
            isValid = false;
        }

        // Validación para el campo "salePrice"
        const salePriceField = document.querySelector('input[name="salePrice"]');
        if (salePriceField.value.trim() === '' || isNaN(parseFloat(salePriceField.value))) {
            alert('El campo "Precio de Venta" debe ser un número válido.');
            salePriceField.focus();
            isValid = false;
        }

        // Validación para el campo "stock"
        const stockField = document.querySelector('input[name="stock"]');
        if (stockField.value.trim() === '' || isNaN(parseInt(stockField.value))) {
            alert('El campo "Stock" debe ser un número entero válido.');
            stockField.focus();
            isValid = false;
        }

        // Validación para el campo "imgProduct" 
        const imgProductField = document.querySelector('input[name="imgProduct"]');
        if (imgProductField.files.length === 0) {
            alert('Debes seleccionar al menos una imagen para el producto.');
            imgProductField.focus();
            isValid = false;
        }

        return isValid;
>>>>>>> c6bb516e7ae63af232c21af56965a38ad9e79217
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
