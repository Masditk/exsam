<template>
  <div class="min-h-screen">
    <Navbar :scrolledPastHero="!isOverHero" @navbar-height="setNavbarHeight" />

    <Home @hero-height="setHeroHeight" />

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/hero/Home.vue'

const isOverHero = ref(true)
const heroHeight = ref(0)
const navbarHeight = ref(0)

function updateScroll() {
  isOverHero.value = window.scrollY + navbarHeight.value < heroHeight.value
}

function setHeroHeight(height: number) {
  heroHeight.value = height
}

function setNavbarHeight(height: number) {
  navbarHeight.value = height
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>
