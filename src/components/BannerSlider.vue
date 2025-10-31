<template>
  <div class="container_banner_slider">
    <div class="swiper-container main-slider" ref="mainSlider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
          <figure class="slide-bgimg" :style="`background-image:url(${slide.image})`">
            <img :src="slide.image" class="entity-img" />
          </figure>
          <div class="content">
            <p class="title">{{ slide.title }}</p>
            <span class="caption">{{ slide.caption }}</span>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev slider-btn" style="color: white;"></div>
      <div class="swiper-button-next slider-btn" style="color: white;"></div>
    </div>

    <div class="swiper-container nav-slider" ref="navSlider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
          <figure class="slide-bgimg" :style="`background-image:url(${slide.image})`">
            <img :src="slide.image" class="entity-img" />
          </figure>
          <div class="content">
            <p class="title">{{ slide.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Swiper from 'swiper'
import { Navigation, Controller } from 'swiper/modules'

const mainSlider = ref(null)
const navSlider = ref(null)

const slides = ref([
  {
    title: 'Shaun Matthews',
    caption: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: 'https://i.pinimg.com/1200x/79/6c/34/796c34906c9111f02f41a319298a261b.jpg'
  },
  {
    title: 'Alexis Berry',
    caption: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: 'https://i.pinimg.com/1200x/79/6c/34/796c34906c9111f02f41a319298a261b.jpg'
  },
  {
    title: 'Billie Pierce',
    caption: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: 'https://i.pinimg.com/1200x/79/6c/34/796c34906c9111f02f41a319298a261b.jpg'
  },
  {
    title: 'Trevor Copeland',
    caption: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: 'https://i.pinimg.com/1200x/79/6c/34/796c34906c9111f02f41a319298a261b.jpg'
  },
  {
    title: 'Bernadette Newman',
    caption: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: 'https://i.pinimg.com/1200x/79/6c/34/796c34906c9111f02f41a319298a261b.jpg'
  }
])

onMounted(() => {
  const mainSwiperInstance = new Swiper(mainSlider.value, {
    modules: [Navigation, Controller],
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  const navSwiperInstance = new Swiper(navSlider.value, {
    modules: [Controller],
    loop: true,
    slidesPerView: 5,
    spaceBetween: 5,
    centeredSlides: true,
  })

  mainSwiperInstance.controller.control = navSwiperInstance
  navSwiperInstance.controller.control = mainSwiperInstance
})
</script>
