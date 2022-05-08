<template>
  <button
    type="button"
    class="inline-flex justify-center items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-primary/90 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80 uppercase tracking-widest"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'Button',
  },
})
</script>
