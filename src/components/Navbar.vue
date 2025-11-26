<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav
    id="navbar"
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-xs"
    :class="scrolledPastHero ? 'bg-white shadow-md' : 'bg-transparent'"
  >
    <div class="flex items-center justify-between py-3 px-6">
      <!-- LOGO -->
      <img
        :src="logo"
        alt="Logo"
        class="h-10 w-auto object-contain transition-all duration-300"
        :class="scrolledPastHero ? 'brightness-0 invert-0' : 'brightness-0 invert'"
      />

      <!-- NAV LINKS -->
      <ul
        class="flex gap-6 font-semibold text-lg transition-all duration-300"
        :class="scrolledPastHero ? 'text-black' : 'text-white'"
      >
        <li class="cursor-pointer hover:opacity-60">Home</li>
        <li class="cursor-pointer hover:opacity-60">Destinasi</li>
        <li class="cursor-pointer hover:opacity-60">Budaya dan Sejarah</li>
        <li class="cursor-pointer hover:opacity-60">Peta Interaktif</li>
        <li class="cursor-pointer hover:opacity-60">Tentang</li>
      </ul>

      <MagnifyingGlassIcon
        class="h-7 w-7 cursor-pointer transition-all duration-300"
        :class="scrolledPastHero ? 'text-black' : 'text-white'"
        @click="onSearchClick"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import logo from '@/assets/image-1-5-removebg-preview-1.png'

const emit = defineEmits(['navbar-height'])

defineProps({
  scrolledPastHero: Boolean,
})

function onSearchClick() {
  console.log('Search icon ditekan')
}

onMounted(() => {
  const navbarSection = document.getElementById('navbar')
  if (navbarSection) {
    emit('navbar-height', navbarSection.clientHeight)
  }
})
</script>

<style scoped></style>
