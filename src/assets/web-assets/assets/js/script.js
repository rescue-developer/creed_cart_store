document.addEventListener("DOMContentLoaded", () => {
  const decrementButton = document.querySelectorAll("#decrement");
  const incrementButton = document.querySelectorAll("#increment");
  const quantityInput = document.querySelector("#quantity");
  const productPriceElement = document.getElementById("product_price");
  const subtotalElement = document.getElementById("subtotal");
  const deliveryFeeElement = document.getElementById("delivery-fee");
  const finalValueElement = document.getElementById("final-value");

  const parsePrice = (priceString) => {
    const number = parseInt(priceString.replace(/[^0-9]/g, ""), 10);
    return number;
  };

  const formatPrice = (price) => `Rs ${price}`;

  const unitPrice = parsePrice(productPriceElement.textContent);

  const updateTotals = () => {
    const quantity = parseInt(quantityInput.value, 10);
    const rawSubtotal = unitPrice * quantity;
    subtotalElement.textContent = formatPrice(rawSubtotal);
    const deliveryFee = parsePrice(deliveryFeeElement.textContent);
    const finalValue = rawSubtotal + deliveryFee; // Remove discount from here
    finalValueElement.textContent = formatPrice(finalValue);

    console.log("Unit Price:", formatPrice(unitPrice));
    console.log("Quantity:", quantity);
    console.log(
      "Raw Subtotal (Unit Price * Quantity):",
      formatPrice(rawSubtotal)
    );
    console.log("Delivery Fee:", formatPrice(deliveryFee));
    console.log("Final Value (Raw + Delivery Fee):", formatPrice(finalValue));
  };

  updateTotals();

  incrementButton.forEach((inc) => {
    inc.addEventListener("click", () => {
      console.log("hy");

      let quantity = parseInt(quantityInput.value, 10);
      quantity += 1;
      quantityInput.value = quantity;
      updateTotals();
    });
  });

  decrementButton.forEach((dec) => {
    dec.addEventListener("click", () => {
      let quantity = parseInt(quantityInput.value, 10);
      if (quantity > 1) {
        quantity -= 1;
        quantityInput.value = quantity;
        updateTotals();
      }
    });
  });

  // Select color
  const colorCircles = document.querySelectorAll(".color-circle");
  const colorDetail = document.querySelectorAll("#color-detail");

  colorDetail.forEach((el) => {
    colorCircles.forEach((circle) => {
      circle.addEventListener("click", function () {
        colorCircles.forEach((c) => c.classList.remove("active"));

        this.classList.add("active");

        el.textContent =
          this.getAttribute("data-color").charAt(0).toUpperCase() +
          this.getAttribute("data-color").slice(1);
      });
    });
  });

  // size

  const buttons = document.querySelectorAll(".button-container .btn");
  const sizeDetail = document.getElementById("size-detail");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      sizeDetail.textContent = this.textContent;
    });
  });

  const productPriceElementCart = document.getElementById("product_price_cart");
  const subtotalElementCart = document.getElementById("subtotal_cart");
  const finalValueCartElement = document.getElementById("finalValueCart");
  const quantityInputCart = document.getElementById("quantityInput"); // Ensure quantity input is present

  const discount = 50; // Example discount
  const deliveryFee = 100; // Example delivery fee

  const parsePriceCart = (priceString) => {
    const number = parseInt(priceString.replace(/[^0-9]/g, ""), 10);
    return number;
  };

  const formatPriceCart = (price) => `Rs ${price}`;

  const unitPriceCart = parsePriceCart(productPriceElementCart.textContent);

  const updateTotalsCart = () => {
    const quantity = parseInt(quantityInputCart.value, 10) || 1; // Default to 1 if empty
    const rawSubtotal = unitPriceCart * quantity;
    subtotalElementCart.textContent = formatPriceCart(rawSubtotal);
    const finalValue = rawSubtotal - discount + deliveryFee;
    finalValueCartElement.textContent = formatPriceCart(finalValue);

    console.log("Unit Price:", formatPriceCart(unitPriceCart));
    console.log("Quantity:", quantity);
    console.log(
      "Raw Subtotal (Unit Price * Quantity):",
      formatPriceCart(rawSubtotal)
    );
    console.log("Discount:", formatPriceCart(discount));
    console.log("Delivery Fee:", formatPriceCart(deliveryFee));
    console.log(
      "Final Value (Raw - Discount + Delivery Fee):",
      formatPriceCart(finalValue)
    );
  };

  updateTotalsCart();
});

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButton = document.getElementById("add-to-cart");
  
  // Only add card when "Add to Cart" button is clicked
  addToCartButton.addEventListener("click", function () {
    console.log("Add to Cart button clicked!");

    // Simulating card data (you can extract this from your existing card)
    const card = {
      title: "Stylish Comfort: Oversized Fit Printed T-Shirt for Men",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "./web-assets/assets/images/t-shirt_product.jpg",
      discountedPrice: "Rs55.00",
      originalPrice: "Rs32.00",
      quantity: 1
    };

    // Log the card data to the console
    console.log("Card added:", card);

    // Call the function to display the cart (You can add the item in localStorage or just show it in the container)
    displayCartItems(card);
  });
});

// Function to display cart items
function displayCartItems(card) {
  const cartContainer = document.getElementById("cart-container");

  // Create HTML content for the card
  const cardHTML = `
    <div class="card cart-item-card">
      <div class="card-head">
        <label class="check check-dark"><input type="checkbox"></label>
        <img src="${card.image}" alt="">
      </div>
      <div class="card-body">
        <div class="info-price">
          <div class="info">
            <div class="card-subtitle text-ellipsis">${card.title}</div>
            <div class="card-desc text-ellipsis text-ellipsis-2">${card.description}</div>
          </div>
          <div class="price">
            <div class="discounted-price"><del>${card.discountedPrice}</del></div>
            <div class="original-price">${card.originalPrice}</div>
          </div>
        </div>
        <div class="desc-buttons">
          <div class="card-desc" style="height: 52px; display: flex; flex-direction: column; gap: 10px;">
            Brand : Name | Store : Other
            <div class="quantity-counter">
              <div class="counter">
                <button class="decrement"><i class="bx bx-minus"></i></button>
                <input type="text" class="quantity" value="${card.quantity}" readonly>
                <button class="increment"><i class="bx bx-plus"></i></button>
              </div>
            </div>
          </div>
          <div class="buttons">
            <button class="btn btn-dark btn-icon btn-circle bx bx-heart"></button>
            <button class="btn btn-danger btn-icon btn-circle bx bx-trash"></button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Append the card HTML to the cart container
  cartContainer.innerHTML = cardHTML;

  // Log the added item in the cart
  console.log("Card displayed in cart:", card);
}


// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the Add to Cart button and Cart items container
  const addToCartButton = document.getElementById("add-to-cart");
  const cartItemsContainer = document.getElementById("cart-items");

  // Check if the elements exist before adding event listeners
  if (addToCartButton && cartItemsContainer) {

    // Event listener for the "Add to Cart" button
    addToCartButton.addEventListener("click", function () {
      console.log("Add to Cart button clicked!");

      // Clone the product card and add it to the cart
      const productCard = document.getElementById("product-card").cloneNode(true);
      cartItemsContainer.innerHTML = ""; // Clear the cart container if needed
      cartItemsContainer.appendChild(productCard); // Append the cloned product card to the cart

      console.log("Product added to cart!");
    });

    // Event listener for the "Remove Item" button in the cart
    cartItemsContainer.addEventListener("click", function (e) {
      if (e.target && e.target.id === "remove-item") {
        console.log("Remove button clicked!");
        const productCard = e.target.closest(".cart-item-card");
        if (productCard) {
          productCard.remove(); // Remove the clicked card from the cart
          console.log("Product removed from cart!");
        }
      }
    });
  } else {
    console.error("Required elements not found in the DOM.");
  }
});
