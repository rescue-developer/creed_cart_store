<template>
  <div class="content-area">
    <BannerSlider />

    <div class="container flash-sale">
      <div class="headings" style="float: right; margin: 10px 0;">
        <router-link to="/products">See All Products</router-link>
      </div>
      <hr>
      <div class="swiper mySwiper swiper-products" ref="productsSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(group, index) in productGroups" :key="index">
            <ProductCard 
              v-for="product in group" 
              :key="product.id" 
              :product="product" 
            />
          </div>
        </div>
        <div class="swiper-button-next slider-btn"></div>
        <div class="swiper-button-prev slider-btn"></div>
      </div>
    </div>

    <div class="container product-categories">
      <div class="headings d-flex">
        <router-link to="/products">See More</router-link>
      </div>
      <hr>
      <div class="categories-cards swiper category-swiper" ref="categorySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="category in topCategories" :key="category.id">
            <router-link to="/products" class="top-category">
              <div class="category-card">
                <img :src="category.image" :alt="category.name">
                <h6>{{ category.name }}</h6>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container products product-container">
      <hr>
      <div class="for-you-products product-cards product-load">
        <router-link 
          v-for="product in productsStore.products" 
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
              <div class="card-desc text-ellipsis text-ellipsis-2">
                {{ product.description }}
              </div>
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
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import BannerSlider from '@/components/BannerSlider.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProductsStore } from '@/stores/products'

const productsStore = useProductsStore()
const productsSwiper = ref(null)
const categorySwiper = ref(null)

const productGroups = ref([
  [productsStore.products[0], productsStore.products[0]],
  [productsStore.products[0], productsStore.products[0]],
  [productsStore.products[0], productsStore.products[0]]
])

const topCategories = ref([
  { id: 1, name: 'T-shirts', image: '/src/assets/images/t-shirts.png' },
  { id: 2, name: 'Shirts', image: 'https://shop.imgacademy.com/cdn/shop/products/royal_ss_crew_4f6f6c7b-c0be-4039-86ef-da55d549f45f_2048x2048.jpg' },
  { id: 3, name: 'Headphones', image: 'https://t3.ftcdn.net/jpg/02/28/19/26/360_F_228192611_akMH8f6lbZ2NedZluGMgZCco0aKRKtGk.jpg' },
  { id: 4, name: 'Bags', image: 'https://images.unsplash.com/photo-1705909237050-7a7625b47fac' },
  { id: 5, name: 'Mobiles', image: 'https://media.wisemarket.com.pk/product/honor-x8b-60.webp' },
  { id: 6, name: 'Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
  { id: 7, name: 'Watches', image: 'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg' }
])

onMounted(() => {
  if (productsSwiper.value) {
    new Swiper(productsSwiper.value, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }

  if (categorySwiper.value) {
    new Swiper(categorySwiper.value, {
      slidesPerView: 7,
      spaceBetween: 20,
      breakpoints: {
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
        1280: { slidesPerView: 7 }
      }
    })
  }
})
</script>
