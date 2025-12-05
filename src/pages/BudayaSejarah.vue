<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    id="hero-section"
    class="relative w-full bg-[#fbfbfb] min-h-screen flex flex-col items-center justify-center"
  >
    <img
      :src="imageBudaya"
      alt="Destinasi"
      class="absolute inset-0 w-full h-full object-cover brightness-50"
    />

    <h1
      class="relative text-white font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl px-6 text-center max-w-[1200px]"
    >
      Temukan Destinasi Wisata yang Menarik di Samarinda!
    </h1>
  </section>

  <div class="w-full mt-5 px-6">
    <div
      class="w-full md:w-1/3 lg:w-1/5 bg-white rounded-xl flex items-center gap-3 px-4 py-2 border border-gray-400"
    >
      <MagnifyingGlassIcon class="h-6 w-6 text-gray-500" />
      <input
        v-model="search"
        type="text"
        placeholder="Cari destinasi..."
        class="w-full outline-none text-gray-700 placeholder-gray-500"
      />
    </div>
  </div>

  <!-- KIRIM DATA KE CARDGRID -->
  <CardGrid
    :items="paginatedItems"
    :currentPage="currentPage"
    :totalPages="totalPages"
    @update:page="currentPage = $event"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import CardGrid from '@/components/CardGrid.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import imageBudaya from '@/assets/Rectangle 43 (1).png'

const search = ref('')

/* ---------------------------
   ALL DATA DARI DESTINASI
--------------------------- */
const items = ref(
  Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Tempat Wisata ${i + 1}`,
    img: '',
  })),
)

const currentPage = ref(1)
const itemsPerPage = 15 // 5x3 grid per page

const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage))

const paginatedItems = computed(() => {
  const filtered = items.value.filter((i) =>
    i.name.toLowerCase().includes(search.value.toLowerCase()),
  )
  const start = (currentPage.value - 1) * itemsPerPage
  return filtered.slice(start, start + itemsPerPage)
})

/* ---------------------------
   HERO HEIGHT EMITTER
--------------------------- */
const emit = defineEmits(['hero-height'])

onMounted(() => {
  const hero = document.getElementById('hero-section')
  if (hero) emit('hero-height', hero.clientHeight)
})
</script>
