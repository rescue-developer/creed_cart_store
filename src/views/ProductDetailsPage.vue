<template>
  <div class="content-area" v-if="product">
    <div class="breadcrumbs-container">
      <h4>Product Detail</h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/" class="breadcrumb-link">Home</router-link></li>
        <li class="breadcrumb-item"><router-link to="/products" class="breadcrumb-link">Products</router-link></li>
        <li class="breadcrumb-item active">{{ product.name }}</li>
      </ol>
    </div>
   
    <div class="container product-detail-cards">
      <div class="product-detail">
        <div class="product-img-and-info">
          <div class="products-image">
            <img :src="mainImage" class="main-img" alt="Main Product Image">
            <div class="products-other-img">
              <img 
                v-for="(img, index) in productImages" 
                :key="index"
                :src="img" 
                class="sm-img" 
                :alt="`Thumbnail ${index + 1}`" 
                @click="mainImage = img"
              >
            </div>
            
            <div class="card product-owner">
              <div class="card-head">
                <div class="store-name">
                  <i class='bx bx-store-alt'></i>
                  <h6>Creative T-shirts</h6>
                  <i class='bx bxs-badge-check'></i>
                </div>
                <div class="rating-reviews">
                  <i class="bx bxs-star"></i>
                  <strong>(4.8)</strong>
                  <strong>17.5k reviews</strong>
                </div>
              </div>
              <hr>
              <div class="card-body">
                <div class="location">
                  <i class="bx bxs-map"></i>
                  New york, USA
                </div>
                <div class="buttons">
                  <button class="btn btn-chat-us">Chat with Seller</button>
                  <button class="btn btn-visit-store">VISIT STORE</button>
                </div>
              </div>
            </div>
            
            <hr>
            <div class="product-details">
              <h6>DETAILS</h6>
              <ul>
                <li><i class="bx bxs-map"></i>Send from <strong>New York, USA</strong></li>
                <li><i class='bx bxs-truck'></i>Estimated Shipping <strong>Rs 3.99</strong></li>
                <li><i class='bx bxs-check-shield'></i><strong>100 %</strong>Original Product</li>
              </ul>
            </div>
          </div>
          
          <div class="product-info">
            <div class="share-badge">
              <div class="badge badge-pill">New Arrivals</div>
              <i class='bx bx-share-alt bx-flip-vertical'></i>
            </div>
            <h2 class="product-title">{{ product.name }}</h2>
            <div class="rating-reviews-sold">
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <strong>({{ product.rating }})</strong>
              </div>
              <div class="reviews">{{ product.reviews }} reviews</div>
              <div style="height: 15px;border: 1px solid grey;"></div>
              <div class="sold">{{ product.sold }} Sold</div>
            </div>
            <div class="product-price">
              <h2 class="original-price">Rs {{ product.price }}</h2>
              <div class="discounted-price"><del>Rs {{ product.originalPrice }}</del>-77%</div>
            </div>
            
            <div class="select-colors">
              <h6>SELECTED COLOR</h6>
              <div class="color-picker">
                <div 
                  v-for="color in product.colors" 
                  :key="color"
                  class="color-circle" 
                  :class="{ active: selectedColor === color }"
                  :data-color="color"
                  :style="{ backgroundColor: color }"
                  @click="selectedColor = color"
                ></div>
              </div>
            </div>
            
            <div class="select-size">
              <h6>SELECTED SIZE</h6>
              <div class="button-container container-size">
                <button 
                  v-for="size in product.sizes" 
                  :key="size"
                  class="btn btn-color btn-sm" 
                  :class="{ active: selectedSize === size }"
                  @click="selectedSize = size"
                >
                  {{ size }}
                </button>
              </div>
            </div>
            
            <div class="select-color-family">
              <h6>SELECTED COLOR FAMILY</h6>
              <div class="color-images">
                <img 
                  v-for="(img, index) in productImages" 
                  :key="index"
                  :src="img" 
                  class="color-product" 
                  :class="{ active: index === 0 }"
                  alt=""
                >
              </div>
            </div>
            
            <div class="product-description">
              <h6>DESCRIPTION</h6>
              <p>
                {{ product.description }}
                <span class="dots" v-if="!showFullDescription">...</span>
                <span class="more-text" v-if="showFullDescription">Lorem ipsum additional content that will be revealed after clicking "Read More". This portion includes more detailed information about the product and its features.</span>
              </p>
              <button class="show-more-btn" @click="showFullDescription = !showFullDescription">
                {{ showFullDescription ? 'Read Less' : 'Read More' }}
              </button>
            </div>
          </div>
          
          <div class="order-detail">
            <h3>Order Details</h3>
            <hr>
            <div class="quantity-counter">
              <h6>Quantity</h6>
              <div class="counter">
                <button @click="quantity > 1 ? quantity-- : null"><i class="bx bx-minus"></i></button>
                <input type="text" :value="quantity" readonly>
                <button @click="quantity++"><i class="bx bx-plus"></i></button>
              </div>
            </div>
            
            <div class="heading-info">
              <h6>Color</h6>  
              <strong>{{ selectedColor }}</strong>
            </div>
            <div class="heading-info">
              <h6>Size</h6>  
              <strong>{{ selectedSize }}</strong>
            </div>
            <div class="heading-info">
              <h6>Price</h6>  
              <strong>Rs {{ product.price * quantity }}</strong>
            </div>
            <div class="heading-info">
              <h6>Delivery Fee</h6>  
              <strong>Rs 50</strong>
            </div>
            
            <hr>
            <div class="heading-info">
              Return & Warranty 
              <i class='bx bx-info-circle'></i>
            </div>
            <div class="desc-info">
              <i class='bx bx-redo bx-flip-horizontal'></i>
              <div class="text">14 days easy return</div>
            </div>
            <div class="desc-info">
              <i class='bx bx-shield-x'></i>
              <div class="text">Warranty not available</div>
            </div>
            
            <div class="heading-info">
              <h5 style="color: black;">Sub Total</h5>
              <h5 style="color: black;">Rs {{ (product.price * quantity) + 50 }}</h5>
            </div>
            <hr>
            
            <button class="btn btn-block btn-icon btn-wishlist" @click="toggleWishlist">
              <i class="bx bx-heart icon-pre"></i> Save to Wishlist 
            </button>
            <button class="btn btn-block btn-icon btn-cart" @click="addToCart">
              <i class="bx bx-cart icon-pre"></i> Add to Cart
            </button>
            <button class="btn btn-block btn-icon btn-danger">
              <i class="bx bx-notepad icon-pre"></i> Report Product 
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'

const route = useRoute()
const productsStore = useProductsStore()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()

const product = computed(() => productsStore.getProductById(route.params.id))

const mainImage = ref(product.value?.image || '')
const selectedColor = ref(product.value?.colors[0] || 'red')
const selectedSize = ref(product.value?.sizes[0] || 'XS')
const quantity = ref(1)
const showFullDescription = ref(false)

const productImages = ref([
  product.value?.image,
  product.value?.image,
  product.value?.image,
  product.value?.image
])

function addToCart() {
  if (product.value) {
    cartStore.addToCart({
      ...product.value,
      selectedColor: selectedColor.value,
      selectedSize: selectedSize.value
    })
    alert('Product added to cart!')
  }
}

function toggleWishlist() {
  if (product.value) {
    wishlistStore.toggleWishlist(product.value)
    alert(wishlistStore.isInWishlist(product.value.id) ? 'Added to wishlist!' : 'Removed from wishlist!')
  }
}
</script>
