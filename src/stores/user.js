import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const isLoggedIn = computed(() => !!user.value)

  function login(userData) {
    user.value = userData
    localStorage.setItem('user', JSON.stringify(userData))
  }

  function logout() {
    user.value = null
    localStorage.removeItem('user')
  }

  function updateProfile(data) {
    if (user.value) {
      user.value = { ...user.value, ...data }
      localStorage.setItem('user', JSON.stringify(user.value))
    }
  }

  function initUser() {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
    }
  }

  initUser()

  return {
    user,
    isLoggedIn,
    login,
    logout,
    updateProfile
  }
})
