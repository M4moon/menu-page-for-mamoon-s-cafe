// Initialize an empty cart array to store cart items
let cart = [];

function toggleMenu(menuId) {
    // Your existing toggleMenu function
}

function toggleCartDropdown() {
    const cartDropdown = document.getElementById('cartDropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'none' ? 'block' : 'none';
}

function addToCart(itemName, itemPrice) {
    // Create an object representing the cart item
    const item = {
        name: itemName,
        price: itemPrice
    };

    // Add the item to the cart array
    cart.push(item);

    // Update the cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cart');
    const cartCountElement = document.getElementById('cartCount');
    cartCountElement.textContent = cart.length.toString();

    // Clear the current cart display
    cartElement.innerHTML = '';

    // Loop through the cart items and create list elements to display them
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Rs. ${item.price}`;
        cartElement.appendChild(listItem);
    });
}

