//Validaciones de Registro desde el Front
//Capturamos los elementos del formulario
const form = document.querySelector('#form_create');
const nameInput = document.querySelector('#name');
const detailInput = document.querySelector('#detail');
const characteristicInput = document.querySelector('#characteristic');
const idCategoryInput = document.querySelector('#idCategory');
const purchasePriceInput = document.querySelector('#purchasePrice');
const salePriceInput = document.querySelector('#salePrice');
const stockInput = document.querySelector('#stock');

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

//Validación del campo Nombre de Producto
const validateName = () => {
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
      setError(nameInput, 'Debe ingresar un nombre para el producto');
      return false;
    } else {
      setSuccess(nameInput);
      return true;
    }
};

//Validación del campo Detalle del Producto
const validateDetail = () => {
    const detailValue = detailInput.value.trim();
    if (detailValue === '') {
      setError(detailInput, 'Debe ingresar un detalle para el producto');
      return false;
    } else {
      setSuccess(detailInput);
      return true;
    }
};

//Validación del campo Caracteristica del Producto
const validateCharacteristic = () => {
    const characteristicValue = characteristicInput.value.trim();
    if (characteristicValue === '') {
      setError(characteristicInput, 'Debe ingresar una caracteristica para el producto');
      return false;
    } else {
      setSuccess(characteristicInput);
      return true;
    }
};

//Validación del campo Categoria de Producto
const validateIdCategory = () => {
  const idCategoryValue = idCategoryInput.value.trim();
  if (idCategoryValue === '') {
    setError(idCategoryInput, 'Debe seleccionar una categoría para el producto');
    return false;
  } else {
    setSuccess(idCategoryInput);
    return true;
  }
};

//Validación del campo Precio de Compra de Producto
const validatePurchasePrice = () => {
    const purchasePriceValue = purchasePriceInput.value.trim();
    if (purchasePriceValue === '') {
      setError(purchasePriceInput, 'Debe ingresar un precio de compra para el producto');
      return false;
    } else {
      setSuccess(purchasePriceInput);
      return true;
    }
};

//Validación del campo Precio de Venta de Producto
const validateSalePrice = () => {
    const salePriceValue = salePriceInput.value.trim();
    if (salePriceValue === '') {
      setError(salePriceInput, 'Debe ingresar un precio de venta para el producto');
      return false;
    } else {
      setSuccess(salePriceInput);
      return true;
    }
};

//Validación del campo Nombre de Producto
const validateStock = () => {
    const stockValue = stockInput.value.trim();
    if (stockValue === '') {
      setError(stockInput, 'Debe ingresar un stock para el producto');
      return false;
    } else {
      setSuccess(stockInput);
      return true;
    }
};

//Creamos un evento input para validar los campos
nameInput.addEventListener('input', validateName);
detailInput.addEventListener('input', validateDetail);
characteristicInput.addEventListener('input', validateCharacteristic);
idCategoryInput.addEventListener('blur', validateIdCategory);
purchasePriceInput.addEventListener('input', validatePurchasePrice);
salePriceInput.addEventListener('input', validateSalePrice);
stockInput.addEventListener('input', validateStock);

//Agregamos un evento 'submit' al formulario con un preventDefault
//y ejecutamos cada una de las validaciones
form.addEventListener('submit', function(e) {
    // Validar cada campo
    const nameValid = validateName();
    const detailValid = validateDetail();
    const characteristicValid = validateCharacteristic();
    const idCategoryValid = validateIdCategory();
    const purchasePriceValid = validatePurchasePrice();
    const salePriceValid = validateSalePrice();
    const stockValid = validateStock();
  
    // Verificar si hay errores en alguno de los campos
    if (!nameValid || !detailValid || !characteristicValid || !idCategoryValid || !purchasePriceValid || !salePriceValid || !stockValid) {
      // Si hay errores, prevenimos el envío del formulario
      e.preventDefault();
    }
  });

  
    /* ----------------- ALERTA DE PRODUCTO CREADO CON EXITO ----------------- */

document.getElementById("formCreate").addEventListener("submit", function (event) {
  event.preventDefault();

  fetch("/admin/store", {
    method: "POST",
    body: new FormData(event.target),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .then(result => {
      if (result.success === true) {
        Swal.fire({
          title: "PRODUCTO CREADO CON ÉXITO",
          icon: "success"
        }).then(() => {
          window.location.href = "/admin";
        });
      } else {
        Swal.fire({
          title: "EL PRODUCTO NO PUDO SER CREADO",
          icon: "error"
        });
      }
    })
    .catch(error => {
      console.error("Error al crear producto:", error);
      Swal.fire({
        title: "Error",
        text: "Intente nuevamente",
        icon: "error"
      });
    });
  })
   