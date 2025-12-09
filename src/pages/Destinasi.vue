<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    id="hero-section"
    class="relative w-full bg-[#fbfbfb] min-h-screen flex flex-col items-center justify-center"
  >
    <img
      :src="imageDestinasi"
      alt="Destinasi"
      class="absolute inset-0 w-full h-full object-cover brightness-50"
    />

    <h1
      class="relative text-white font-extrabold text-3xl sm:text-5xl lg:text-7xl xl:text-8xl px-4 sm:px-6 text-center max-w-[1200px]"
    >
      Temukan Destinasi Wisata yang Menarik di Samarinda!
    </h1>
  </section>

  <!-- Breadcrumb -->
  <div class="bg-gray-50 border-b border-gray-200 px-4 md:px-6 py-3">
    <Breadcrumb :items="[{ label: 'Destinasi', path: '/destinasi' }]" />
  </div>

  <!-- Search Section - Terpisah dari Breadcrumb -->
  <div class="bg-white border-b border-gray-200 px-4 md:px-6 py-4 sticky top-0 z-40">
    <div class="max-w-7xl mx-auto">
      <div
        class="w-full md:w-1/2 lg:w-1/3 bg-white rounded-xl flex items-center gap-3 px-4 py-2 border border-gray-400"
      >
        <MagnifyingGlassIcon class="h-5 w-5 md:h-6 md:w-6 text-gray-500 shrink-0" />
        <input
          v-model="search"
          type="text"
          placeholder="Cari destinasi..."
          class="w-full outline-none text-gray-700 placeholder-gray-500 text-sm md:text-base"
        />
      </div>
    </div>
  </div>

  <!-- KIRIM DATA KE CARDGRID -->
  <div class="px-4 md:px-6 py-6 md:py-10 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <CardGrid
        :items="paginatedItems"
        :currentPage="currentPage"
        :totalPages="totalPages"
        basePath="/destinasi"
        @update:page="currentPage = $event"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import CardGrid from '@/components/CardGrid.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import imageDestinasi from '@/assets/Rectangle 43.png'
import destinasiData from '@/data/destinasi.json'

const search = ref('')

const items = ref(
  destinasiData.map((d) => ({
    ...d,
    image: new URL(`../assets/destinasi/${d.image}`, import.meta.url).href,
  })),
)

const currentPage = ref(1)
const itemsPerPage = 15

const filteredItems = computed(() =>
  items.value.filter((item) => item.name.toLowerCase().includes(search.value.toLowerCase())),
)

const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage))

const paginatedItems = computed(() => {
  const filtered = items.value.filter((item) =>
    item.name.toLowerCase().includes(search.value.toLowerCase()),
  )

  const start = (currentPage.value - 1) * itemsPerPage
  return filtered.slice(start, start + itemsPerPage)
})

const emit = defineEmits(['hero-height'])

onMounted(() => {
  const hero = document.getElementById('hero-section')
  if (hero) emit('hero-height', hero.clientHeight)
})
</script>
