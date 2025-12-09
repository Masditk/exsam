<template>
  <div class="max-w-full mx-auto px-6 py-10 space-y-8 max-w">
    <!-- GRID 5 kolom -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      <CardItem
        v-for="item in items"
        :key="item.id"
        :slug="item.slug"
        :name="item.name"
        :image="item.image"
        :basePath="basePath"
      />
    </div>

    <!-- PAGINATION -->
    <div class="flex justify-center">
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @update:page="$emit('update:page', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardItem from '@/components/CardItem.vue'
import Pagination from '@/components/Pagination.vue'

defineProps<{
  items: Array<{ id: number; slug: string; name: string; image?: string }>
  currentPage: number
  totalPages: number
  basePath?: string
}>()

defineEmits(['update:page'])
</script>
