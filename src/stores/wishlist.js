import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useWishlistStore = defineStore('wishlist', () => {
  const items = ref([])

  const wishlistCount = computed(() => items.value.length)

  const isInWishlist = computed(() => {
    return (productId) => items.value.some(item => item.id === productId)
  })

  function addToWishlist(product) {
    const exists = items.value.find(item => item.id === product.id)
    if (!exists) {
      items.value.push(product)
    }
  }

  function removeFromWishlist(productId) {
    const index = items.value.findIndex(item => item.id === productId)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  function toggleWishlist(product) {
    if (isInWishlist.value(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  function clearWishlist() {
    items.value = []
  }

  function initWishlist() {
    const savedWishlist = localStorage.getItem('wishlist')
    if (savedWishlist) {
      try {
        items.value = JSON.parse(savedWishlist)
      } catch (e) {
        console.error('Failed to parse wishlist data:', e)
        items.value = []
      }
    }
  }

  watch(items, (newItems) => {
    localStorage.setItem('wishlist', JSON.stringify(newItems))
  }, { deep: true })

  initWishlist()

  return {
    items,
    wishlistCount,
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    clearWishlist
  }
})
