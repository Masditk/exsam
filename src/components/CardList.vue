<template>
  <div class="flex gap-4 overflow-x-auto lg:overflow-visible w-full">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="min-w-[180px] w-[180px] lg:min-w-0 lg:w-1/5"
    >
      <CardItem :id="item.id" :name="item.name" :img="item.img" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardItem from './CardItem.vue'

interface Item {
  id: number
  name: string
  img?: string
}

defineProps<{
  items: Item[]
}>()
</script>
