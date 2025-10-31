import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const language = ref('EN')

  function setLanguage(lang) {
    language.value = lang
    localStorage.setItem('language', lang)
  }

  function initSettings() {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      language.value = savedLanguage
    }
  }

  initSettings()

  return {
    language,
    setLanguage
  }
})
