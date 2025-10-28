// Use parent class to target Product cards
const parentClass = 'product-load'; // Replace with the actual parent class name if dynamic
const productCards = document.querySelectorAll(`.${parentClass} .Product-card`);

// Debugging: Log the total cards
console.log(`Total cards found: ${productCards.length}`);

// Continue with the rest of the logic
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loader = document.querySelector('.loader');

// Set initial visible cards
let visibleCards = 25;

function loadMoreCards() {
    loader.style.display = 'block'; // Show loader
    setTimeout(() => {
        loader.style.display = 'none'; // Hide loader after 2 seconds
        for (let i = visibleCards; i < visibleCards + 25 && i < productCards.length; i++) {
            productCards[i].style.display = 'inline-block'; // Show next 25 cards
        }
        visibleCards += 25;
        if (visibleCards >= productCards.length) {
            loadMoreBtn.style.display = 'none'; // Hide button if all cards are visible
        }
    }, 2000); // Simulate loading time
}

// Show the initial 25 cards
for (let i = 0; i < visibleCards && i < productCards.length; i++) {
    productCards[i].style.display = 'inline-block'; // Ensure proper display
}

// Attach event listener to Load More button
loadMoreBtn.addEventListener('click', loadMoreCards);
console.log(`Total cards: ${productCards.length}`);
