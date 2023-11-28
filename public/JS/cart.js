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


/* ALERTA DE COMPRA FINALIZADA */
const total = document.querySelector("#Total");
total.addEventListener("click", function (event) {
  // Prevenir el envío del formulario por defecto
  event.preventDefault();

  // Ejecuta el código de SweetAlert al hacer clic
  Swal.fire({
    icon: "success",
    title: "¡Tu compra se ha realizado con exito!",
  }).then(() => {
    // Redirigir al home después de cerrar la alerta
    window.location.href = "/"; // Reemplaza "/" con la ruta de tu página de inicio
  });
});