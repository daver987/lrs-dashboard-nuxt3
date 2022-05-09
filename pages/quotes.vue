<template>
  <div class="h-full">
    <h1>Quotes</h1>
    <GoogleAutocomplete />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  layout: 'default',
})
</script>
