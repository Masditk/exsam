<template>
  <section class="w-full py-6">
    <div class="flex items-center justify-between mx-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">{{ title }}</h2>
        <p class="text-gray-500 text-sm">{{ subtitle }}</p>
      </div>

      <button class="text-blue-600 font-semibold hover:underline cursor-pointer">
        Lihat Semua
      </button>
    </div>

    <div class="flex gap-4 overflow-x-auto lg:overflow-visible w-fu mx-6">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="min-w-[180px] w-[180px] lg:min-w-0 lg:w-1/5"
      >
        <CardItem :name="item.name" :img="item.img" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CardItem from './CardItem.vue'

interface Item {
  name: string
  img?: string
}

defineProps<{
  title: string
  subtitle: string
  items: Item[]
}>()
</script>

<style scoped></style>
