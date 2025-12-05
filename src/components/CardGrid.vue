<template>
  <div class="max-w-7xl mx-auto px-6 py-10 space-y-8">
    <!-- GRID 5 kolom -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      <CardItem
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :img="item.img"
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
  items: Array<{ id: number; name: string; img: string }>
  currentPage: number
  totalPages: number
}>()

defineEmits(['update:page'])
</script>
