# Creed Cart Vue

Vue.js e-commerce application converted from HTML.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Copy Assets
You need to copy the following files from the original HTML project:

#### CSS Files
Copy the content from `web-assets/assets/css/style.css` and `web-assets/assets/css/kit.css` to:
- `src/assets/css/style.css`

#### Images
Copy all images from `web-assets/assets/images/` to:
- `src/assets/images/`

Required images:
- company-logo-removebg-preview.png
- help-center.png
- avatar-web.jpeg
- america.png
- pakistan.png
- payment-methods.png
- payment-method-2.png
- t-shirt_product.jpg
- t-shirts.png
- google-icon-removebg-preview.png
- facebook-logo.jpg

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## Project Structure

```
creed-cart-vue/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css          # Main stylesheet (copy from original)
│   │   └── images/                # Images folder (copy from original)
│   ├── components/
│   │   ├── AppHeader.vue          # Header with navigation
│   │   ├── AppFooter.vue          # Footer
│   │   ├── BannerSlider.vue       # Home page slider
│   │   ├── CategoriesDropdown.vue # Categories dropdown
│   │   └── ProductCard.vue        # Product card component
│   ├── router/
│   │   └── index.js               # Vue Router configuration
│   ├── stores/
│   │   ├── cart.js                # Cart state management
│   │   ├── products.js            # Products store
│   │   ├── user.js                # User authentication
│   │   └── wishlist.js            # Wishlist management
│   ├── views/
│   │   ├── HomePage.vue           # Home page
│   │   ├── ProductsPage.vue       # Products listing with filters
│   │   ├── ProductDetailsPage.vue # Product details
│   │   ├── CartPage.vue           # Shopping cart
│   │   ├── CheckoutPage.vue       # Checkout process
│   │   ├── LoginPage.vue          # Login/Signup
│   │   ├── WishlistPage.vue       # Wishlist
│   │   ├── AccountManagePage.vue  # Account management
│   │   ├── MyOrdersPage.vue       # Orders history
│   │   └── ... (other pages)
│   ├── App.vue                    # Root component
│   └── main.js                    # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features

- ✅ Product listing and filtering
- ✅ Product details with image gallery
- ✅ Shopping cart functionality
- ✅ Wishlist management
- ✅ User authentication
- ✅ Checkout process
- ✅ Order management
- ✅ Responsive design
- ✅ State management with Pinia
- ✅ Routing with Vue Router
- ✅ Swiper integration for sliders

## Technologies Used

- **Vue 3**: Progressive JavaScript framework
- **Vite**: Next generation frontend tooling
- **Vue Router**: Official router for Vue.js
- **Pinia**: State management library
- **Swiper**: Modern mobile touch slider
- **Boxicons**: High quality web icons

## Important Notes

1. **CSS Files**: Make sure to copy the complete `style.css` and `kit.css` from the original project
2. **Images**: All images must be copied to maintain the same design
3. **State Management**: Uses Pinia for cart, wishlist, products, and user state
4. **Routing**: All pages are configured in `src/router/index.js`
5. **Components**: Reusable components are in `src/components/`

## Next Steps

1. Copy all CSS files from the original project
2. Copy all image assets
3. Test all functionality
4. Add more products to the products store
5. Implement backend API integration
6. Add payment gateway integration
7. Implement real authentication

## License

This project is private and proprietary.
