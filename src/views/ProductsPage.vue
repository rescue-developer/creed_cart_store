<template>
  <div class="content-area">
    <div class="breadcrumbs-container">
      <h4>Products</h4>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/" class="breadcrumb-link">Home</router-link></li>
        <li class="breadcrumb-item active">Browse Products</li>
      </ol>
    </div>
    
    <div class="container filter-and-products">
      <div class="filter-sidebar">
        <div class="filter-section">
          <div class="filter-header" @click="toggleFilter($event)">
            Category
            <i class='bx bx-chevron-right arrow'></i>
          </div>
          <div class="filter-content">
            <div class="filter-subsection" v-for="cat in filterCategories" :key="cat.id">
              <div class="filter-header" @click="toggleFilter($event)">
                {{ cat.name }}
                <i class='bx bx-chevron-right arrow'></i>
              </div>
              <div class="filter-content">
                <label v-for="sub in cat.subcategories" :key="sub.id">
                  <input type="checkbox" v-model="selectedFilters.categories" :value="sub.id"> 
                  {{ sub.name }}
                  <span>{{ sub.count }}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="filter-section">
          <div class="filter-header">Brands <i class='bx bx-chevron-right arrow'></i></div>
        </div>
        <hr>
        <div class="filter-section">
          <div class="filter-header" @click="toggleFilter($event)">
            Price
            <i class='bx bx-chevron-right arrow'></i>
          </div>
          <div class="filter-content">
            <div class="range-slider">
              <span>
                <div class="from">
                  Min
                  <input type="number" v-model="priceRange.min" min="0" max="10000000"/> 
                </div>
                <div class="to">
                  Max
                  <input type="number" v-model="priceRange.max" min="0" max="10000000"/>
                </div>
              </span>
              <input v-model="priceRange.min" min="0" max="10000000" step="500" type="range"/>
              <input v-model="priceRange.max" min="0" max="10000000" step="500" type="range"/>
            </div>
          </div>
        </div>
        <hr>
        <div class="filter-section">
          <div class="filter-header">Size <i class='bx bx-chevron-right arrow'></i></div>
        </div>
      </div>

      <div class="filtered-products">
        <div class="container result-sorting">
          <div class="showing-result">
            <p>Showing <b>{{ filteredProducts.length }}</b> results from total <b>{{ productsStore.products.length }}</b></p>
          </div>
          <div class="sorting">
            <label>Sort by</label>
            <div class="dropdown sorting-dropdown">
              <div class="select" @click="showSortDropdown = !showSortDropdown">
                <span class="selected">{{ sortBy }}</span>
                <div class="caret" :class="{ 'caret-rotate': showSortDropdown }"></div>
              </div>
              <ul class="menu" :class="{ 'menu-open': showSortDropdown }">
                <li @click="changeSortBy('Popularity')">Popularity</li>
                <li @click="changeSortBy('Price: Low to High')">Price: Low to High</li>
                <li @click="changeSortBy('Price: High to Low')">Price: High to Low</li>
                <li @click="changeSortBy('Newest')">Newest</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="filtered-cards">
          <router-link 
            v-for="product in filteredProducts" 
            :key="product.id"
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
                  <del>Rs {{ product.originalPrice }}</del>-66%
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="pagination">
          <button class="page-button" :disabled="currentPage === 1" @click="currentPage--">Previous</button>
          <button class="page-number" :class="{ active: currentPage === 1 }" @click="currentPage = 1">1</button>
          <button class="page-number" @click="currentPage = 2">2</button>
          <button class="page-number" @click="currentPage = 3">3</button>
          <button class="page-button" @click="currentPage++">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProductsStore } from '@/stores/products'

const productsStore = useProductsStore()

const selectedFilters = ref({
  categories: [],
  brands: [],
  sizes: []
})

const priceRange = ref({
  min: 0,
  max: 5000000
})

const sortBy = ref('Popularity')
const showSortDropdown = ref(false)
const currentPage = ref(1)

const filterCategories = ref([
  {
    id: 'woman',
    name: 'Woman',
    subcategories: [
      { id: 'tops', name: 'Tops', count: 37 },
      { id: 'jackets', name: 'Jackets', count: 22 },
      { id: 'sweaters', name: 'Sweaters', count: 31 }
    ]
  },
  {
    id: 'men',
    name: 'Men',
    subcategories: []
  },
  {
    id: 'kids',
    name: 'Kids',
    subcategories: []
  }
])

const filteredProducts = computed(() => {
  let result = productsStore.products

  if (priceRange.value.min || priceRange.value.max) {
    result = result.filter(p => 
      p.price >= priceRange.value.min && p.price <= priceRange.value.max
    )
  }

  if (sortBy.value === 'Price: Low to High') {
    result = [...result].sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'Price: High to Low') {
    result = [...result].sort((a, b) => b.price - a.price)
  }

  return result
})

function toggleFilter(event) {
  const header = event.currentTarget
  const content = header.nextElementSibling
  const arrow = header.querySelector('.arrow')
  
  if (content) {
    content.classList.toggle('open')
    header.classList.toggle('active')
    arrow.classList.toggle('down')
  }
}

function changeSortBy(value) {
  sortBy.value = value
  showSortDropdown.value = false
}
</script>
