<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="bg-blue-600 w-full flex justify-center items-center py-10">
    <div class="flex flex-col items-center gap-4">
      <img :src="logo" alt="Logo" class="h-20 w-auto object-contain" />
      <p class="text-white text-center text-sm">© 2025 Exsam</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png'
</script>

<style scoped></style>
