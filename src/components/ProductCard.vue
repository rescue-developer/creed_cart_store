<template>
  <router-link 
    class="card-product" 
    :to="{ name: 'product-details', params: { id: product.id } }"
  >
    <div class="card Product-card">
      <div class="card-head">
        <img :src="product.image" class="card-image" :alt="product.name">
      </div>
      <div class="card-body">
        <div class="brand-and-ratings">
          <div class="brand">{{ product.brand }}</div>
          <div class="rating-and-sold">
            <div class="rating"><i class="bx bxs-star"></i> {{ product.rating }}</div>
            <div class="sold">({{ product.sold }}) sold</div>
          </div>
        </div>
        <div class="card-desc text-ellipsis text-ellipsis-2">{{ product.description }}</div>
        <div class="prices">
          <div class="card-subtitle original-price">Rs {{ product.price }}</div>
        </div>
        <div class="card-subtitle discounted-price">
          <del>Rs {{ product.originalPrice }}</del>-{{ calculateDiscount }}%
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const calculateDiscount = computed(() => {
  return Math.round(((props.product.originalPrice - props.product.price) / props.product.originalPrice) * 100)
})
</script>
