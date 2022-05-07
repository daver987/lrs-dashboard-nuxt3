<template>
  <div>
    <h1>Bookings</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  layout: 'default',
})
</script>
