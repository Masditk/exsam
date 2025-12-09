<template>
  <div class="flex gap-4 overflow-x-auto lg:overflow-visible w-full">
    <div
      v-for="(item, index) in itemsData"
      :key="index"
      class="min-w-[180px] w-[180px] lg:min-w-0 lg:w-1/5"
    >
      <CardItem
        :id="item.id"
        :name="item.name"
        :slug="item.slug"
        :image="item.image"
        :basePath="basePath"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardItem from './CardItem.vue'
import destinasiData from '@/data/destinasi.json'
import budayaData from '@/data/budaya-sejarah.json'
import { computed } from 'vue'

interface Item {
  id: number
  name: string
  slug: string
  image?: string
}

const props = defineProps<{
  basePath: 'destinasi' | 'budaya-sejarah'
}>()

const itemsData = computed((): Item[] => {
  const data = props.basePath === 'destinasi' ? destinasiData : budayaData

  return data.map((d: any) => ({
    ...d,
    image: d.image
      ? new URL(`../assets/${props.basePath}/${d.image}`, import.meta.url).href
      : undefined,
  }))
})
</script>
