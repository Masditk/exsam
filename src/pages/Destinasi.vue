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
      class="relative text-white font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl px-6 text-center max-w-[1200px]"
    >
      Temukan Destinasi Wisata yang Menarik di Samarinda!
    </h1>
  </section>

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
import imageDestinasi from '@/assets/Rectangle 43.png'

/* ---------------------------
   ALL DATA DARI DESTINASI
--------------------------- */
const items = ref(
  Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Tempat Wisata ${i + 1}`,
    img: '',
  })),
)

const currentPage = ref(1)
const itemsPerPage = 15 // 5x3 grid per page

const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage))

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return items.value.slice(start, start + itemsPerPage)
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
