import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      id: 1,
      name: 'Stylish Comfort: Oversized Fit Printed T-Shirt for Men',
      brand: 'H&M',
      price: 295,
      originalPrice: 850,
      rating: 4.9,
      sold: '13.8k',
      reviews: 623,
      image: '/src/assets/images/t-shirt_product.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum aliquam nisi iste itaque voluptate amet ea iusto quisquam ipsum ut, non ad similique ducimus veritatis distinctio nobis, rerum, aut et!',
      colors: ['red', 'orange', 'brown', 'purple'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 't-shirt'
    },
    {
      id: 2,
      name: 'Casual Cotton T-Shirt',
      brand: 'Zara',
      price: 395,
      originalPrice: 950,
      rating: 4.7,
      sold: '10.2k',
      reviews: 432,
      image: '/src/assets/images/t-shirt_product.jpg',
      description: 'Comfortable cotton t-shirt perfect for everyday wear',
      colors: ['blue', 'black', 'white'],
      sizes: ['S', 'M', 'L', 'XL'],
      category: 't-shirt'
    }
  ])

  const categories = ref([
    { id: 't-shirt', name: "T-Shirts" },
    { id: 'car', name: "Cars" },
    { id: 'mobiles', name: "Mobiles" },
    { id: 'electronics', name: "Electronics" },
    { id: 'laptop', name: "Laptops" },
    { id: 'pen', name: "Pens" }
  ])

  const getProductById = computed(() => {
    return (id) => products.value.find(p => p.id === parseInt(id))
  })

  const getProductsByCategory = computed(() => {
    return (category) => products.value.filter(p => p.category === category)
  })

  const searchProducts = computed(() => {
    return (query) => {
      if (!query) return products.value
      return products.value.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase())
      )
    }
  })

  return {
    products,
    categories,
    getProductById,
    getProductsByCategory,
    searchProducts
  }
})
