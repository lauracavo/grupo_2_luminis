document.addEventListener("DOMContentLoaded", function () {
  let trolleyItems = [];

  document.addEventListener("click", (event) => {
      console.log('Clic en:', event.target);
      if (event.target.classList.contains("add-to-cart")) {
          const name = event.target.dataset.name;
          const salePrice = parseFloat(event.target.dataset.salePrice);

          // Agregar el producto al carrito
          trolleyItems.push({ name, salePrice });

          // Actualizar la tabla del carrito
          renderTrolley();
      }
  });

  function renderTrolley() {
      // Mover la declaración dentro de la función
      const table_content = document.getElementById("table_body");
      const totalElement = document.getElementById("Total");

      // Verificar si los elementos existen antes de usarlos
      if (!table_content || !totalElement) {
          console.error('Los elementos del DOM no existen.');
          return;
      }

      table_content.innerHTML = ""; // Limpiar contenido anterior
      let total = 0;

      trolleyItems.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.salePrice.toFixed(2)}</td>
          <td>
            <input class="product_quantity" type="number" value="1" min="1" max="10" />
          </td>
          <td>${item.salePrice.toFixed(2)}</td>
        `;
        table_content.appendChild(row);
        total += item.salePrice;
    });

    totalElement.textContent = total.toFixed(2);
}
});