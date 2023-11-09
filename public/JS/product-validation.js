document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('productForm');
    productForm.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Evitar que se envíe el formulario si no pasa la validación.
        }
    });

    function validateForm() {
        let isValid = true;

        // Validación para el campo ""
        const nameField = document.querySelector('input[name="name"]');
        if (nameField.value.trim() === '') {
            alert('El campo "Nombre del producto" no puede estar vacío.');
            nameField.focus();
            return false;
        }

        // // Validación para el campo "brand"
        // const brandField = document.querySelector('input[name="brand"]');
        // if (brandField.value.trim() === '') {
        //     alert('El campo "Marca" no puede estar vacío.');
        //     brandField.focus();
        //     isValid = false;
        // }

        // // Validación para el campo "editorial"
        // const editorialField = document.querySelector('input[name="editorial"]');
        // if (editorialField.value.trim() === '') {
        //     alert('El campo "Editorial" no puede estar vacío.');
        //     editorialField.focus();
        //     isValid = false;
        // }

        // // Validación para el campo "author"
        // const authorField = document.querySelector('input[name="author"]');
        // if (authorField.value.trim() === '') {
        //     alert('El campo "Autor" no puede estar vacío.');
        //     authorField.focus();
        //     isValid = false;
        // }

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
    }
});
