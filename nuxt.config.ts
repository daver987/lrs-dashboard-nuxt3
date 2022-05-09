import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '',
    public: {
      MAPS_API_KEY: process.env.MAPS_API_KEY,
    },
  },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', 'unplugin-icons/nuxt'],
})
