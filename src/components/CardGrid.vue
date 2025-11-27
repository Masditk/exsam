<template>
  <div class="max-w-7xl mx-auto px-6 py-10 space-y-8">
    <!-- GRID 5 kolom -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      <CardItem v-for="item in paginatedItems" :key="item.id" :name="item.name" :img="item.img" />
    </div>

    <!-- PAGINATION -->
    <div class="flex justify-center">
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @update:page="currentPage = $event"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CardItem from '@/components/CardItem.vue'
import Pagination from '@/components/Pagination.vue'

/* ---------------------------
   DUMMY DATA 15 items (5x3)
--------------------------- */
const items = ref(
  Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Tempat Wisata ${i + 1}`,
    img: '', // kosong
  })),
)

/* ---------------------------
   Pagination Logic
--------------------------- */
const currentPage = ref(1)
const itemsPerPage = 15 // 5 kolom × 3 baris

const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage))

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return items.value.slice(start, start + itemsPerPage)
})
</script>
