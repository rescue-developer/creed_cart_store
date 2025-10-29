<template>
  <header id="header">
    <nav class="navbar">
      <div class="first-half">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/web-assets/assets/images/company-logo-removebg-preview.png" class="logo-image" alt="Creed Cart">
          </router-link>
        </div>
        <div class="links">
          <ul class="d-flex first-ul">
            <li><router-link to="/login">Become a Seller</router-link></li>
            <li><a href="#">New Arrivals</a></li>
            <li class="dropdown">
              <a href="#" class="open_category" @mouseenter="showCategories = true">
                Categories <i class='bx bx-chevron-down'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="middle">
        <ul>
          <li>
            <div class="search-box">
              <input 
                type="text" 
                class="search-box-input" 
                placeholder="What are you looking for ?"
                v-model="searchQuery"
                @keyup.enter="handleSearch"
              >
              <button class="search-box-btn" @click="handleSearch">
                <i class="search-box-icon material-icons bx bx-search"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
      
      <div class="second-half">
        <ul class="d-flex">
          <li>
            <div class="tooltip-wrapper">
              <a href="#" class="tooltip-bottom" data-tooltip="Help Center!">
                <img src="@/assets/web-assets/assets/images/help-center.png" width="40px" height="40px" alt="">
              </a>
            </div>
          </li>
          <li></li>
          <li>
            <router-link to="/cart">
              <i class="bx bx-cart fs-4"></i>
            </router-link>
          </li>
          <li class="noti-counter" v-if="cartCount > 0">
            <span>{{ cartCount }}</span>
          </li>
          <li>
            <div class="dropdown-noti">
              <i class="bx bx-bell fs-4 dropdown-toggle" @click="toggleNotifications"></i>
              <div v-if="showNotifications" class="dropdown-menu">
                <div class="dropdown-header">
                  <h3>Notifications</h3>
                </div>
                <div class="tabs">
                  <button 
                    class="tab-link-noti" 
                    :class="{ active: activeTab === 'new' }"
                    @click="activeTab = 'new'"
                  >
                    New (2)
                  </button>
                  <button 
                    class="tab-link-noti"
                    :class="{ active: activeTab === 'seen' }"
                    @click="activeTab = 'seen'"
                  >
                    Seen (3)
                  </button>
                </div>
                <div v-show="activeTab === 'new'" class="tab-content-noti">
                  <div class="notification">
                    <img src="@/assets/web-assets/assets/images/avatar-web.jpeg" alt="Notification Image" class="notification-img">
                    <div class="notification-text">
                      <p>You have a new message from John.</p>
                    </div>
                  </div>
                </div>
                <div v-show="activeTab === 'seen'" class="tab-content-noti">
                  <div class="notification">
                    <img src="@/assets/web-assets/assets/images/avatar-web.jpeg" alt="Notification Image" class="notification-img">
                    <div class="notification-text">
                      <p>Project update received from the development team.</p>
                    </div>
                  </div>
                </div>
                <router-link to="/chats" style="text-decoration: none;">
                  <button class="btn-noti-view">View All</button>
                </router-link>
              </div>
            </div>
          </li>
          
          <div class="language">
            <div id="select-container">
              <ul>
                <li @click="changeLanguage('EN')">
                  <img src="@/assets/web-assets/assets/images/america.png" alt="English">
                </li>
                <li @click="changeLanguage('PK')">
                  <img src="@/assets/web-assets/assets/images/pakistan.png" alt="Pakistan">
                </li>
              </ul>
            </div>
          </div>

          <li v-if="isLoggedIn">
            <div class="drop-profile">
              <img
                src="@/assets/web-assets/assets/images/avatar-web.jpeg"
                alt="Avatar" 
                width="50px" 
                height="50px"
                style="border-radius: 50%;" 
                @click="toggleProfileMenu"
              >
              <div v-if="showProfileMenu" class="drop-profile-content">
                <router-link to="/account">Manage My Account</router-link>
                <router-link to="/my-orders">My Orders</router-link>
                <router-link to="/wishlist">My Wishlist & Followed Stores</router-link>
                <router-link to="/my-reviews">My Reviews</router-link>
                <a @click.prevent="handleLogout">Logout</a>
              </div>
            </div>
          </li>
          <template v-else>
            <li>
              <div><router-link class="click-btn btn-style700" to="/login">Login</router-link></div>
            </li>
            <li>
              <div><router-link class="click-btn btn-style702" to="/login">Sign up</router-link></div>
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <CategoriesDropdown v-if="showCategories" @mouseleave="showCategories = false" />
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useUserStore } from '@/stores/user'
import CategoriesDropdown from './CategoriesDropdown.vue'

const router = useRouter()
const cartStore = useCartStore()
const userStore = useUserStore()

const searchQuery = ref('')
const showCategories = ref(false)
const showNotifications = ref(false)
const showProfileMenu = ref(false)
const activeTab = ref('new')

const cartCount = computed(() => cartStore.cartCount)
const isLoggedIn = computed(() => userStore.isLoggedIn)

function handleSearch() {
  if (searchQuery.value.trim()) {
    router.push({ name: 'products', query: { search: searchQuery.value } })
  }
}

function toggleNotifications() {
  showNotifications.value = !showNotifications.value
}

function toggleProfileMenu() {
  showProfileMenu.value = !showProfileMenu.value
}

function changeLanguage(lang) {
  console.log('Language changed to:', lang)
}

function handleLogout() {
  userStore.logout()
  showProfileMenu.value = false
  router.push('/')
}
</script>
