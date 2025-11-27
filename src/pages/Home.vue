<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    id="hero-section"
    class="relative w-full bg-[#fbfbfb] min-h-screen flex flex-col items-center justify-center"
  >
    <img
      :src="landmarkKotaSamarinda"
      alt="Landmark Samarinda"
      class="absolute inset-0 w-full h-full object-cover brightness-50"
    />

    <h1
      class="relative text-white font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl px-6 text-center max-w-[1200px]"
    >
      Discover New Place and Create Unforgettable Memories
    </h1>
  </section>

  <CardList
    title="Destinasi Wisata"
    subtitle="Destinasi wisata yang ada di Samarinda"
    :items="[{ name: 'Croatia' }, { name: 'Morocco' }, { name: 'Mexico', img: image9 }]"
  />

  <CardList
    title="Budaya dan Sejarah"
    subtitle="Eksplorasi budaya lokal dan peninggalan sejarah di Samarinda"
    :items="[{ name: 'Croatia' }, { name: 'Morocco' }, { name: 'Mexico', img: image }]"
  />
</template>

<script setup lang="ts">
import CardList from '@/components/CardList.vue'
import image9 from '@/assets/image-9.png'
import image from '@/assets/image.png'
import landmarkKotaSamarinda from '@/assets/landmark-kota-samarinda-istock-1468649261-ratio-16x9-1.png'
import { onMounted } from 'vue'

const emit = defineEmits(['hero-height'])

onMounted(() => {
  const heroSection = document.getElementById('hero-section')
  if (heroSection) {
    emit('hero-height', heroSection.clientHeight)
  }
})
</script>
