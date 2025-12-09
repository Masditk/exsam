<template>
  <div class="bg-gray-50 p-6">
    <div class="mx-auto space-y-5">
      <!-- Judul Halaman -->
      <h1 class="text-3xl font-semibold mb-4" v-if="q">
        Hasil Pencarian: <span class="text-blue-600">"{{ q }}"</span>
      </h1>

      <!-- ================= DESTINASI ================= -->
      <div>
        <h2 class="text-2xl font-semibold mb-2">Destinasi</h2>

        <CardGrid
          v-if="paginatedDestinasi.length"
          :items="paginatedDestinasi"
          :currentPage="currentPageDestinasi"
          :totalPages="totalPagesDestinasi"
          basePath="destinasi"
          @update:page="currentPageDestinasi = $event"
        />

        <p v-else class="text-gray-500">Tidak ada hasil destinasi.</p>
      </div>

      <!-- ================= BUDAYA & SEJARAH ================= -->
      <div>
        <h2 class="text-2xl font-semibold mb-2">Budaya & Sejarah</h2>

        <CardGrid
          v-if="paginatedBudaya.length"
          :items="paginatedBudaya"
          :currentPage="currentPageBudaya"
          :totalPages="totalPagesBudaya"
          basePath="budaya-sejarah"
          @update:page="currentPageBudaya = $event"
        />

        <p v-else class="text-gray-500">Tidak ada hasil budaya & sejarah.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CardGrid from '@/components/CardGrid.vue'
import destinasiData from '@/data/destinasi.json'
import budayaData from '@/data/budaya-sejarah.json'

const route = useRoute()
const q = ref((route.query.q as string) || '')

// Pagination state
const itemsPerPage = 10
const currentPageDestinasi = ref(1)
const currentPageBudaya = ref(1)

// Reaktif saat query berubah
watch(
  () => route.query.q,
  (newQ) => {
    q.value = (newQ as string) || ''
    currentPageDestinasi.value = 1
    currentPageBudaya.value = 1
  },
)

// Filter data berdasar query
const filteredDestinasi = computed(() => {
  if (!q.value) return destinasiData
  return destinasiData
    .filter((item) => item.name.toLowerCase().includes(q.value.toLowerCase()))
    .map((d) => ({
      ...d,
      image: d.image ? new URL(`../assets/destinasi/${d.image}`, import.meta.url).href : undefined,
    }))
})

const filteredBudaya = computed(() => {
  if (!q.value) return budayaData
  return budayaData
    .filter((item) => item.name.toLowerCase().includes(q.value.toLowerCase()))
    .map((d) => ({
      ...d,
      image: d.image
        ? new URL(`../assets/budaya-sejarah/${d.image}`, import.meta.url).href
        : undefined,
    }))
})

// Pagination untuk Destinasi
const totalPagesDestinasi = computed(() => Math.ceil(filteredDestinasi.value.length / itemsPerPage))
const paginatedDestinasi = computed(() => {
  const start = (currentPageDestinasi.value - 1) * itemsPerPage
  return filteredDestinasi.value.slice(start, start + itemsPerPage)
})

// Pagination untuk Budaya
const totalPagesBudaya = computed(() => Math.ceil(filteredBudaya.value.length / itemsPerPage))
const paginatedBudaya = computed(() => {
  const start = (currentPageBudaya.value - 1) * itemsPerPage
  return filteredBudaya.value.slice(start, start + itemsPerPage)
})

const emit = defineEmits(['hero-height'])

onMounted(() => {
  emit('hero-height', 0)
})
</script>
