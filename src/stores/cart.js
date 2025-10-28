import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const cartCount = computed(() => items.value.length)

  const cartTotal = computed(() => {
    return items.value.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  })

  function addToCart(product) {
    const existingItem = items.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({
        ...product,
        quantity: 1
      })
    }
  }

  function removeFromCart(productId) {
    const index = items.value.findIndex(item => item.id === productId)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  function updateQuantity(productId, quantity) {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }

  function clearCart() {
    items.value = []
  }

  return {
    items,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
})
