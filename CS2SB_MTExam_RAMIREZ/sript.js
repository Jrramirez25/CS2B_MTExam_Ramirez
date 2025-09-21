// script.js

// This script handles the add/remove to cart functionality for locale products
// and the contact form submission with basic validation and alert feedback.

// Cart object to keep track of products added
const cart = {};

// Function to update cart count display (optional enhancement)
function updateCartCount() {
    const cartCountElem = document.getElementById('cart-count');
    if (cartCountElem) {
        const totalItems = Object.values(cart).reduce((acc, qty) => acc + qty, 0);
        cartCountElem.textContent = totalItems;
    }
}

// Add event listeners to all add/remove buttons after DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add to cart buttons
    const addButtons = document.querySelectorAll('.btn-add');
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            if (!cart[productId]) {
                cart[productId] = 1;
            } else {
                cart[productId]++;
            }
            alert(`Added product ${productId} to cart. Quantity: ${cart[productId]}`);
            updateCartCount();
        });
    });

    // Remove from cart buttons
    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            if (cart[productId]) {
                cart[productId]--;
                if (cart[productId] <= 0) {
                    delete cart[productId];
                    alert(`Removed product ${productId} from cart.`);
                } else {
                    alert(`Decreased quantity of product ${productId} to ${cart[productId]}`);
                }
                updateCartCount();
            } else {
                alert(`Product ${productId} is not in the cart.`);
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation
            const name = contactForm.elements['name'].value.trim();
            const title = contactForm.elements['title'].value.trim();
            const message = contactForm.elements['message'].value.trim();

            if (!name || !title || !message) {
                alert('Please fill in all fields before submitting.');
                return;
            }

            // Simulate form submission
            alert(`Thank you, ${name}! Your message has been submitted.`);

            // Reset form
            contactForm.reset();
        });
    }
});