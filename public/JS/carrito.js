let trolleyItems = [];
let tableContent;
let totalElement;

document.addEventListener("DOMContentLoaded", () => {
    tableContent = document.getElementById("table_body");
    totalElement = document.getElementById("Total");

    if (!tableContent || !totalElement) {
        console.error('Los elementos del DOM no existen.');
        return;
    }

    console.log('DOM completamente cargado');
    console.log('Botón "FINALIZAR COMPRA":', totalElement);

    document.addEventListener("click", (event) => {
        console.log('Clic en:', event.target);

        if (event.target.classList.contains("add-to-cart")) {
            console.log('Botón "Agregar al carrito" clicado');
            const name = event.target.dataset.name;
            const salePrice = parseFloat(event.target.dataset.salePrice);
            const quantity = 1;

            // Agregar el producto al carrito
            trolleyItems.push({ name, salePrice, quantity });

            // Actualizar la tabla del carrito
            renderTrolley();
        }
    });
});

function renderTrolley() {
    console.log('tableContent:', tableContent);
    console.log('totalElement:', totalElement);

    if (!tableContent || !totalElement) {
        console.error('Los elementos del DOM no existen.');
        return;
    }

    const fragment = document.createDocumentFragment();
    let total = 0;

    trolleyItems.forEach((item) => {
        const row = document.createElement("tr");
        const itemTotal = item.salePrice * item.quantity;

        row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.salePrice.toFixed(2)}</td>
          <td>
            <input class="product_quantity" type="number" value="1" min="1" max="${item.quantity}" />
          </td>
          <td>${itemTotal.toFixed(2)}</td>
        `;

        fragment.appendChild(row);
        total += itemTotal;
    });

    // Limpiar contenido anterior y agregar el fragmento
    tableContent.innerHTML = "";
    tableContent.appendChild(fragment);

    totalElement.textContent = total.toFixed(2);
}
