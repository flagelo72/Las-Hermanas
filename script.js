// Variables
const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const printButton = document.getElementById('print-button');

// Array para almacenar productos
let products = [];

// Límite máximo de productos
const maxProducts = 100; // Esto limita la cantidad de productos.

// Evento para agregar producto
productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    const product = { name, price, quantity };
    products.push(product);

    // Limita la cantidad de productos al límite máximo
    if (products.length > maxProducts) {
        alert(`Se ha alcanzado el límite máximo de ${maxProducts} productos.`);
        products.pop(); // Elimina el último producto agregado
    }

    updateProductList();
    productForm.reset();
});

// Evento para manejar la eliminación de productos
productList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const index = e.target.getAttribute('data-index');
        if (index !== null) {
            // Elimina el producto en el índice especificado
            products.splice(index, 1);
            updateProductList();
        }
    }
});

// Actualizar la lista de productos en la página
function updateProductList() {
    productList.innerHTML = '';
    products.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${product.name}</strong> - Precio: $${product.price} - Cantidad: ${product.quantity}
            <button data-index="${index}">Eliminar</button>
        `;
        productList.appendChild(listItem);
    });
}

// Evento para manejar el envío del formulario
productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = productName.value.trim();
    const price = parseFloat(productPrice.value.trim()); // Convertir a número decimal
    const quantity = parseInt(productQuantity.value.trim()); // Convertir a número entero

    // VALIDACIÓN: VERIFICAR SI EL NOMBRE ESTÁ VACÍO
    if (name === "") {
        prompt("Por favor, ingrese un nombre válido para el producto.");
        addProduct(name, price, quantity);
        return; // Salir de la función si no se proporciona un nombre válido
        //VALIDACION:NO VERIFICA LOS OTROS DATOS.
    }
   
});


