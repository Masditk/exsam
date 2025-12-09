<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav
    id="navbar"
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm"
    :class="scrolledPastHero ? 'bg-white shadow-md' : 'bg-transparent'"
    :style="{ backgroundColor: background }"
  >
    <div class="flex items-center justify-between py-3 px-6">
      <router-link to="/">
        <img
          :src="logo"
          alt="Logo"
          class="h-10 w-auto object-contain transition-all duration-300"
          :class="scrolledPastHero ? 'brightness-0 invert-0' : 'brightness-0 invert'"
        />
      </router-link>

      <ul
        class="flex gap-6 font-semibold text-lg transition-all duration-300"
        :class="scrolledPastHero ? 'text-black' : 'text-white'"
      >
        <router-link to="/" class="cursor-pointer hover:opacity-60" :class="isActive('/')"
          >Home</router-link
        >
        <router-link
          to="/destinasi"
          class="cursor-pointer hover:opacity-60"
          :class="isActive('/destinasi')"
          >Destinasi</router-link
        >
        <router-link
          to="/budaya-sejarah"
          class="cursor-pointer hover:opacity-60"
          :class="isActive('/budaya-sejarah')"
          >Budaya dan Sejarah</router-link
        >
        <router-link
          to="/peta-interaktif"
          class="cursor-pointer hover:opacity-60"
          :class="isActive('/peta-interaktif')"
          >Peta Interaktif</router-link
        >
        <router-link
          to="/tentang"
          class="cursor-pointer hover:opacity-60"
          :class="isActive('/tentang')"
          >Tentang</router-link
        >
      </ul>

      <div class="relative flex items-center w-[50px] md:w-[60px] justify-end">
        <!-- Input Search -->
        <transition name="fade-slide">
          <input
            v-show="searchActive"
            type="text"
            v-model="query"
            ref="searchInput"
            placeholder="Cari..."
            @blur="!preventBlur && closeSearch()"
            @keydown.esc="closeSearch"
            @keydown.enter="doSearch"
            class="w-40 pl-3 pr-10 py-1 rounded-lg outline-none border border-gray-300 transition-all duration-300"
            :class="inputTextClass"
          />
        </transition>

        <!-- Glass Icon Utama (ikon tetap berada di kanan input) -->
        <MagnifyingGlassIcon
          class="absolute right-2 h-6 w-6 cursor-pointer transition-opacity duration-300 z-20"
          :class="scrolledPastHero ? 'text-black' : 'text-white'"
          @mousedown.prevent="handleSearchClick"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick, computed } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useRouter, useRoute } from 'vue-router'
import logo from '@/assets/logo.png'

const router = useRouter()
const route = useRoute()
const searchActive = ref(false)
const preventBlur = ref(false)
const query = ref('')
const searchInput = ref<HTMLInputElement | null>(null)
const emit = defineEmits(['navbar-height'])

const inputTextClass = computed(() => {
  if (searchActive.value && props.scrolledPastHero) return 'text-black placeholder-black'

  if (!props.scrolledPastHero) return 'text-white placeholder-white'

  return 'text-black placeholder-black'
})

const props = defineProps({
  scrolledPastHero: Boolean,
  background: {
    type: String,
    default: 'white',
  },
})

const handleSearchClick = () => {
  preventBlur.value = true

  if (searchActive.value) {
    doSearch()
  } else {
    openSearch()
    nextTick(() => {
      searchInput.value?.focus()
    })
  }

  setTimeout(() => {
    preventBlur.value = false
  }, 50)
}

function openSearch() {
  searchActive.value = true

  nextTick(() => {
    searchInput.value?.focus()
  })
}

function closeSearch() {
  searchActive.value = false
  query.value = ''
}

function doSearch() {
  if (!query.value) return

  router.push(`/search?q=${query.value.trim()}`)

  closeSearch()
}

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/' ? 'underline decoration-2 underline-offset-4' : ''
  } else {
    return route.path.startsWith(path)
      ? props.scrolledPastHero
        ? 'underline decoration-2 underline-offset-4 text-black'
        : 'underline decoration-2 underline-offset-4 text-white'
      : ''
  }
}

onMounted(() => {
  const navbarSection = document.getElementById('navbar')
  if (navbarSection) {
    emit('navbar-height', navbarSection.clientHeight)
  }
})
</script>

<style scoped>
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(8px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(8px);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}
</style>
