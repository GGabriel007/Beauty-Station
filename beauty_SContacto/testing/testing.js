document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const classItem = this.closest('.class-item');
            const classId = classItem.getAttribute('data-class-id');
            const className = classItem.getAttribute('data-class-name');
            const classPrice = parseInt(classItem.getAttribute('data-class-price'));
            const seatsAvailableElement = classItem.querySelector('.seats-available');
            let seatsAvailable = parseInt(classItem.getAttribute('data-seats-available'));

            // Check if there are seats available
            if (seatsAvailable > 0) {
                // Add class to cart
                cartItems.push({ id: classId, name: className, price: classPrice });

                // Decrease seats available
                seatsAvailable--;
                classItem.setAttribute('data-seats-available', seatsAvailable);
                seatsAvailableElement.textContent = seatsAvailable;

                // Save cart to localStorage
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                alert('Class added to cart!');
            } else {
                alert('No seats available for this class.');
            }
        });
    });
});
