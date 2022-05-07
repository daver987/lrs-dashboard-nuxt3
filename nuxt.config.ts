import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  preset: 'cloudflare',
  runtimeConfig: {
    apiSecret: '',
  },
  modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss'],
})
