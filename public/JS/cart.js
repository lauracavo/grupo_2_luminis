const table = document.getElementById("carrito-de-compras");
const table_content = document.getElementById("idproduct");
const totalElement = document.getElementById("total");

let carritoItems = [];

table_content.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const producto = event.target.getAttribute("data-producto");
        const precio = parseFloat(event.target.textContent.split("-")[1].trim());

        // Agregar el producto al carrito
        carritoItems.push({ producto, precio });

        // Actualizar la tabla del carrito
        renderCarrito();
    }
});

function renderCarrito() {
    table.innerHTML = ""; // Cambio el nombre de la variable
    let total = 0;

    carritoItems.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.producto}</td>
            <td>$${item.precio.toFixed(2)}</td>
        `;
        table.appendChild(row); // Cambio el nombre de la variable
        total += item.precio;
    });

    totalElement.textContent = total.toFixed(2);
}
