<script setup lang="tsx">
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
html,
body {
  height: 100%;
}
</style>
