<template>
  <router-link
    :to="`/destinasi/${id}`"
    class="bg-white rounded-xl shadow hover:shadow-lg transition p-3 flex flex-col items-center"
  >
    <div
      class="w-full aspect-square rounded-md overflow-hidden bg-gray-200 grid place-items-center"
    >
      <img v-if="img" :src="img" alt="Image" class="w-full h-full object-cover object-center" />
    </div>

    <p class="mt-3 text-center font-semibold text-gray-800">{{ name }}</p>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  id: number
  name: string
  img?: string
}>()
</script>
