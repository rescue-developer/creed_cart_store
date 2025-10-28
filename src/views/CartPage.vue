<template>
  <div class="content-area">
    <div class="breadcrumbs-container">
      <h4>Shopping Cart</h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/" class="breadcrumb-link">Home</router-link></li>
        <li class="breadcrumb-item active">Shopping Cart</li>
      </ol>
    </div>
    
    <div class="container cart-container">
      <div class="cart-items">
        <label class="check check-dark"> 
          <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" /> 
          Select all 
        </label>
        <hr>
        
        <div v-if="cartStore.items.length === 0" class="empty-cart">
          <p>Your cart is empty</p>
          <router-link to="/products" class="btn btn-primary">Continue Shopping</router-link>
        </div>
        
        <div v-else id="cart-container">
          <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
            <label class="check check-dark">
              <input type="checkbox" v-model="item.selected" />
            </label>
            <img :src="item.image" :alt="item.name" class="cart-item-image">
            <div class="cart-item-details">
              <h6>{{ item.name }}</h6>
              <p>{{ item.description }}</p>
              <div class="item-meta">
                <span v-if="item.selectedColor">Color: {{ item.selectedColor }}</span>
                <span v-if="item.selectedSize">Size: {{ item.selectedSize }}</span>
              </div>
            </div>
            <div class="quantity-counter">
              <div class="counter">
                <button @click="decrementQuantity(item)"><i class="bx bx-minus"></i></button>
                <input type="text" :value="item.quantity" readonly>
                <button @click="incrementQuantity(item)"><i class="bx bx-plus"></i></button>
              </div>
            </div>
            <div class="cart-item-price">
              <strong>Rs {{ item.price * item.quantity }}</strong>
            </div>
            <button class="btn btn-danger btn-sm" @click="removeItem(item.id)">
              <i class="bx bx-trash"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div class="card card-cart">
        <div class="card-head">
          <div class="card-subtitle">Calculated Shipping</div>
          <div class="inputs">
            <div class="field">
              <select class="field-select" style="font-size: 14px; font-family: sans-serif;">
                <option value="">Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <div class="form-row">
              <div class="field">
                <select style="font-size: 14px; font-family: sans-serif;" class="field-select">
                  <option value="">State / City</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                </select>
              </div>
              <div class="field">
                <input style="font-size: 14px; font-family: sans-serif;" type="text" class="field-text" placeholder="ZIP Code" />
              </div>
            </div>
          </div>
          <button class="btn btn-dark btn-block btn-pill">Update</button>
          <hr>
          
          <div class="card-subtitle">Coupon Code</div>
          <div class="card-desc text-ellipsis text-ellipsis-3">Enter your coupon code to get discount on your order</div>
          <div class="field">
            <input style="font-size: 14px; font-family: sans-serif;" type="text" class="field-text" placeholder="Coupon Code" v-model="couponCode" />
          </div>
          <button class="btn btn-dark btn-pill btn-block">Apply</button>
        </div>
        
        <div class="card-body">
          <div class="card grand-total-card">
            <div class="card-head">
              <div class="card-subtitle">Cart Total</div>
            </div>
            <div class="card-body">
              <div class="item-price">
                <div class="item">Cart Subtotal</div>
                <div class="price">Rs {{ cartStore.cartTotal }}</div>
              </div>
              <div class="item-price">
                <div class="item">Design by Flutertop</div>
                <div class="price">Free</div>
              </div>
              <div class="item-price">
                <div class="item">Discount</div>
                <div class="price">-Rs 4.00</div>
              </div>
              <div class="item-price">
                <div class="item">Coupon Discount</div>
                <div class="price">-3%</div>
              </div>
            </div>
            <div class="card-foot">
              <div class="card-subtitle">Cart Total <strong>Rs {{ cartStore.cartTotal - 4 }}</strong></div>
              <router-link to="/checkout">
                <button class="btn btn-light btn-pill btn-block">
                  Proceed to Checkout
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const selectAll = ref(false)
const couponCode = ref('')

function toggleSelectAll() {
  cartStore.items.forEach(item => {
    item.selected = selectAll.value
  })
}

function incrementQuantity(item) {
  cartStore.updateQuantity(item.id, item.quantity + 1)
}

function decrementQuantity(item) {
  if (item.quantity > 1) {
    cartStore.updateQuantity(item.id, item.quantity - 1)
  }
}

function removeItem(id) {
  cartStore.removeFromCart(id)
}
</script>
