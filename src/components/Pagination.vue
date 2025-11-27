<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="flex items-center gap-2">
    <!-- PREVIOUS -->
    <button
      class="pagination-btn"
      :disabled="currentPage === 1"
      @click="$emit('update:page', currentPage - 1)"
    >
      <
    </button>

    <!-- PAGE NUMBERS -->
    <template v-for="page in pagesToShow" :key="page.key">
      <!-- ELLIPSIS -->
      <span v-if="page.type === 'dots'" class="px-3">…</span>

      <!-- NUMBER -->
      <button
        v-else
        class="pagination-page"
        :class="{
          'bg-blue-600 text-white border-blue-600': currentPage === page.number,
        }"
        @click="$emit('update:page', page.number)"
      >
        {{ page.number }}
      </button>
    </template>

    <!-- NEXT -->
    <button
      class="pagination-btn"
      :disabled="currentPage === totalPages"
      @click="$emit('update:page', currentPage + 1)"
    >
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const pagesToShow = computed(() => {
  const pages = []
  const total = props.totalPages
  const current = props.currentPage

  if (total <= 7) {
    // Jika halaman sedikit, tampilkan semua
    return Array.from({ length: total }, (_, i) => ({
      type: 'page',
      number: i + 1,
      key: 'p' + (i + 1),
    }))
  }

  // Halaman pertama selalu ditampilkan
  pages.push({ type: 'page', number: 1, key: 'p1' })

  // Jika currentPage > 3, tampilkan "..."
  if (current > 3) {
    pages.push({ type: 'dots', key: 'd1' })
  }

  // Halaman sekitar currentPage
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  for (let i = start; i <= end; i++) {
    pages.push({ type: 'page', number: i, key: 'p' + i })
  }

  // Jika currentPage < total-2, tampilkan "..."
  if (current < total - 2) {
    pages.push({ type: 'dots', key: 'd2' })
  }

  // Halaman terakhir selalu tampil
  pages.push({ type: 'page', number: total, key: 'p' + total })

  return pages
})
</script>

<style scoped>
@reference "tailwindcss";

.pagination-btn {
  @apply w-9 h-9 flex items-center justify-center rounded-md border
         text-gray-700 bg-white hover:bg-gray-100
         disabled:opacity-30 disabled:cursor-not-allowed;
}

.pagination-page {
  @apply w-9 h-9 flex items-center justify-center border rounded-md
         text-gray-700 bg-white hover:bg-gray-100 cursor-pointer;
}
</style>
