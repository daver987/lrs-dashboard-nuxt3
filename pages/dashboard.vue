<template>
  <div class="p-8">
    <LogoutButton />
    <h1>This is a dashboard</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
});
</script>
