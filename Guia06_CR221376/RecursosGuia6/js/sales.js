// Define an array to store product information (name and price).
const products = [];

// Function to add a product to the array and update the table.
function addProduct() {
  // Get the product name and price from user input.
  const productName = prompt("Enter the product name:");
  const productPrice = parseFloat(prompt("Enter the product price:"));

  // Check if the user entered valid data.
  if (!productName || isNaN(productPrice)) {
    alert("Invalid input. Please enter a valid product name and price.");
    return;
  }

  // Add the product to the array.
  products.push({ name: productName, price: productPrice });

  // Update the table in the HTML.
  updateTable();

  // Clear the input fields for the next entry (if desired).
  // You can add code here to clear input fields if needed.
}

// Function to update the table with product information.
function updateTable() {
  // Get the table element from the HTML.
  const table = document.querySelector("#productTable");

  // Clear the existing table rows.
  table.innerHTML = "";

  // Loop through the products and add rows to the table.
  products.forEach((product, index) => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>$${product.price.toFixed(2)}</td>
    `;
  });

  // Calculate and display the total price.
  const total = products.reduce((sum, product) => sum + product.price, 0);
  document.querySelector("#totalPrice").textContent = `$${total.toFixed(2)}`;
}

// Attach the "Add Product" button click event.
const addButton = document.querySelector("#addButton");
addButton.addEventListener("click", addProduct);