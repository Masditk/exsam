<template>
  <div class="min-h-screen">
    <Navbar
      :scrolledPastHero="!isOverHero"
      @navbar-height="setNavbarHeight"
      :background="navbarBackground"
    />

    <div :style="{ marginTop: pageOffset + 'px' }">
      <router-view @hero-height="setHeroHeight" @change-navbar-bg="setNavbarBackground" />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const isOverHero = ref(true)
const heroHeight = ref(0)
const navbarHeight = ref(0)
const navbarBackground = ref('transparent')
const pageOffset = ref(0)

const route = useRoute()

function setNavbarBackground(color: string) {
  navbarBackground.value = color
}

function updateScroll() {
  if (heroHeight.value === 0) return

  isOverHero.value = window.scrollY + navbarHeight.value < heroHeight.value

  if (isOverHero.value) {
    navbarBackground.value = 'transparent'
  } else {
    navbarBackground.value = 'white'
  }
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

watch(
  () => route.fullPath,
  () => {
    if (heroHeight.value > 0) {
      updateScroll()
    }
    pageOffset.value = Number(route.meta.offsetTop ?? 0)
  },
  { immediate: true },
)
</script>
