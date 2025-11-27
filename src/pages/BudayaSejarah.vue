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
      Lihat Budaya-budaya di Samarinda beserta Sejarahnya
    </h1>
  </section>

  <CardGrid />
</template>

<script setup lang="ts">
import CardGrid from '@/components/CardGrid.vue'
import imageBudaya from '@/assets/Rectangle 43 (1).png'
import { onMounted } from 'vue'

const emit = defineEmits(['hero-height'])

onMounted(() => {
  const heroSection = document.getElementById('hero-section')
  if (heroSection) {
    emit('hero-height', heroSection.clientHeight)
  }
})
</script>
