<template>
  <div class="flex items-center justify-between mb-4">
    <div>
      <h2 class="text-2xl font-bold text-gray-900">{{ title }}</h2>
      <p class="text-gray-500 text-sm">{{ subtitle }}</p>
    </div>

    <button
      @click="$emit('see-all')"
      class="text-blue-600 font-semibold hover:underline cursor-pointer"
    >
      Lihat Semua
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()

defineEmits(['see-all'])
</script>
