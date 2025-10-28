import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/ProductsPage.vue')
    },
    {
      path: '/product/:id',
      name: 'product-details',
      component: () => import('@/views/ProductDetailsPage.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartPage.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/CheckoutPage.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('@/views/WishlistPage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/AccountManagePage.vue')
    },
    {
      path: '/my-orders',
      name: 'my-orders',
      component: () => import('@/views/MyOrdersPage.vue')
    },
    {
      path: '/my-reviews',
      name: 'my-reviews',
      component: () => import('@/views/MyReviewsPage.vue')
    },
    {
      path: '/chats',
      name: 'chats',
      component: () => import('@/views/ChatsPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('@/views/PrivacyPolicyPage.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('@/views/TermsPage.vue')
    },
    {
      path: '/shipment-policy',
      name: 'shipment-policy',
      component: () => import('@/views/ShipmentPolicyPage.vue')
    },
    {
      path: '/refund-exchange',
      name: 'refund-exchange',
      component: () => import('@/views/RefundExchangePage.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
