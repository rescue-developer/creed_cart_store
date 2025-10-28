<template>
  <div class="content-area">
    <div class="breadcrumbs-container">
      <h4>My Wishlist</h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/" class="breadcrumb-link">Home</router-link></li>
        <li class="breadcrumb-item active">Wishlist</li>
      </ol>
    </div>
    
    <div class="container products product-container">
      <div v-if="wishlistStore.items.length === 0" class="empty-wishlist">
        <p>Your wishlist is empty</p>
        <router-link to="/products" class="btn btn-primary">Continue Shopping</router-link>
      </div>
      
      <div v-else class="for-you-products product-cards product-load">
        <div v-for="product in wishlistStore.items" :key="product.id" class="wishlist-item">
          <router-link :to="{ name: 'product-details', params: { id: product.id } }">
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
                  <del>Rs {{ product.originalPrice }}</del>-66%
                </div>
              </div>
            </div>
          </router-link>
          <button class="btn btn-danger btn-sm remove-btn" @click="removeFromWishlist(product.id)">
            <i class="bx bx-trash"></i> Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from '@/stores/wishlist'

const wishlistStore = useWishlistStore()

function removeFromWishlist(productId) {
  wishlistStore.removeFromWishlist(productId)
}
</script>

<style scoped>
.empty-wishlist {
  text-align: center;
  padding: 50px;
}

.wishlist-item {
  position: relative;
}

.remove-btn {
  margin-top: 10px;
  width: 100%;
}
</style>
