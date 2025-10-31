<template>
  <div class="categories_container active_category" @mouseleave="$emit('mouseleave')">
    <ul class="categories">
      <li 
        v-for="category in categories" 
        :key="category.id"
        :class="{ active: activeCategory === category.id }"
        :data-category="category.id"
        @mouseenter="activeCategory = category.id"
      >
        {{ category.name }}
      </li>
    </ul>
    <div class="catagory-container">
      <div 
        v-for="category in categories" 
        :key="category.id"
        :id="category.id"
        class="categories_products"
        :class="{ active: activeCategory === category.id }"
      >
        <div v-if="category.products.length > 0" class="product-list">
          <div v-for="product in category.products" :key="product.id" class="product-item">
            <img :src="product.image" :alt="product.name">
            <p>{{ product.name }}</p>
          </div>
        </div>
        <div v-else class="no-products">
          <p>No products available in this category</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['mouseleave'])

const activeCategory = ref('t-shirt')

const categories = ref([
  {
    id: 't-shirt',
    name: "Man's T-Shirt",
    products: [
      { id: 1, name: 'Premium Cotton T-Shirt', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' },
      { id: 2, name: 'Casual Fit T-Shirt', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' },
      { id: 3, name: 'Sports T-Shirt', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' },
      { id: 4, name: 'V-Neck T-Shirt', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' },
      { id: 5, name: 'Round Neck T-Shirt', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' },
      { id: 6, name: 'Graphic T-Shirt', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' }
    ]
  },
  {
    id: 'car',
    name: 'Car Accessories',
    products: [
      { id: 1, name: 'Car Seat Cover', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' },
      { id: 2, name: 'Car Phone Holder', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' },
      { id: 3, name: 'Car Air Freshener', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' },
      { id: 4, name: 'Car Charger', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' }
    ]
  },
  {
    id: 'mobiles',
    name: 'Mobiles & Tablets',
    products: []
  },
  {
    id: 'electronics',
    name: 'Electronics',
    products: []
  },
  {
    id: 'laptop',
    name: 'Laptops & Computers',
    products: []
  },
  {
    id: 'pen',
    name: 'Stationery',
    products: []
  },
  {
    id: 'fashion',
    name: 'Fashion & Clothing',
    products: []
  },
  {
    id: 'home',
    name: 'Home & Living',
    products: []
  }
])
</script>
