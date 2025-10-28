<template>
  <div class="categories_container active_category" id="categories_container" @mouseleave="$emit('mouseleave')">
    <ul class="categories">
      <li 
        v-for="category in categories" 
        :key="category.id"
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
        <div class="product-list">
          <div v-for="product in category.products" :key="product.id" class="product-item">
            <img :src="product.image" :alt="product.name">
            <p>{{ product.name }}</p>
          </div>
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
      { id: 1, name: 'Child T shirt 3', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' },
      { id: 2, name: 'Child T shirt', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' },
      { id: 3, name: 'Child T shirt', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' }
    ]
  },
  {
    id: 'car',
    name: 'Car',
    products: [
      { id: 1, name: 'Car 3', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' },
      { id: 2, name: 'Car 2', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' },
      { id: 3, name: 'Car 1', image: 'https://creedcart.com/files/tshirt-8726721_1280.jpg' }
    ]
  },
  {
    id: 'mobiles',
    name: 'Mobiles',
    products: []
  },
  {
    id: 'electronics',
    name: 'Electronics',
    products: []
  },
  {
    id: 'laptop',
    name: 'Laptop',
    products: []
  },
  {
    id: 'pen',
    name: 'Pen',
    products: []
  }
])
</script>
