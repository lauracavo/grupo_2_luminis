const table = document.getElementById("carrito-de-compras");
const table_content = document.getElementById("idproduct");
const totalElement = document.getElementById("total");

let trolleyItems = [];

table_content.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const product = event.target.getAttribute("data-product");
        const price = parseFloat(event.target.textContent.split("-")[1].trim());

        // Agregar el producto al carrito
        trolleyItems.push({ product, price });

        // Actualizar la tabla del carrito
        renderTrolley();
    }
});

function renderTrolley() {
    table.innerHTML = ""; // Cambio el nombre de la variable
    let total = 0;

    trolleyItems.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.product}</td>
            <td>$${item.price.toFixed(2)}</td>
        `;
        table.appendChild(row); // Cambio el nombre de la variable
        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}
