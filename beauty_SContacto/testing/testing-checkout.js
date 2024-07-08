document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartElement = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.cart-total');

    function updateCartDisplay() {
        cartElement.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${item.name} - Q${item.price}`;
            cartElement.appendChild(cartItemElement);
            total += item.price;
        });

        cartTotalElement.textContent = total;
    }

    document.querySelector('.checkout-button').addEventListener('click', function() {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            window.location.href = 'checkout.html';
        } else {
            alert('Your cart is empty.');
        }
    });

    // Initialize cart display
    updateCartDisplay();
});
