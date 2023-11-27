function actualizarTotal() {
    // Recorrer todas las filas de la tabla
    var totalGeneral = 0;
    $(".table_content").each(function () {
      var salePrice = parseFloat($(this).closest("tr").find(".table_content:eq(1)").text());
      var cantidadInput = $(this).closest("tr").find(".product_quantity");
      var cantidad = parseInt(cantidadInput.val());
      var stock = parseInt(cantidadInput.attr("max")); // Obtener el valor del atributo "max" (stock)
      
      // Verificar si la cantidad supera el stock disponible
      if (cantidad > stock) {
        // Ajustar la cantidad al stock máximo permitido
        cantidad = stock;
        cantidadInput.val(cantidad);
      }

      var total = salePrice * cantidad;
      totalGeneral += total;

      // Actualizar el contenido de la celda total
      $(this).closest("tr").find(".total").text("$" + total.toFixed(2));
    });

    // Actualizar el total general a pagar
    $(".total_a_pagar").text("$" + totalGeneral.toFixed(2));
  }

  // Llamar a la función al cargar la página
  $(document).ready(function () {
    actualizarTotal();

    // Llamar a la función cuando cambia la cantidad
    $(".product_quantity").on("input", function () {
      actualizarTotal();
    });
  });

  // function deleteProduct(productId) {
  //   fetch(`/delete-product/${productId}`, {
  //     method: 'POST',
  //   })
  //   .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }})
  //        return response.json()
  //       .then(data => {
  //       console.log(data);
  //       location.reload();
  //     })
      
    
  // .catch(error => {
  //       console.error('Error al eliminar el producto:', error);
  //     });
  
  //  }