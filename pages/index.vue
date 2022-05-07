<template>
  <div>
    <h1>Main Dashboard</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
  middleware: ['auth'],
})
</script>
