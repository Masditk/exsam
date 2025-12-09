<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav
    id="navbar"
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm"
    :class="scrolledPastHero ? 'bg-white shadow-md' : 'bg-transparent'"
    :style="{ backgroundColor: background }"
  >
    <!-- Desktop & Tablet View -->
    <div class="hidden md:flex items-center justify-between py-3 px-6">
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

      <div class="relative flex items-center w-[60px] justify-end">
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

    <!-- Mobile View -->
    <div class="md:hidden flex items-center justify-between py-3 px-4">
      <router-link to="/">
        <img
          :src="logo"
          alt="Logo"
          class="h-8 w-auto object-contain transition-all duration-300"
          :class="scrolledPastHero ? 'brightness-0 invert-0' : 'brightness-0 invert'"
        />
      </router-link>

      <div class="flex items-center gap-2">
        <!-- Mobile Search Icon -->
        <div class="relative flex items-center">
          <transition name="fade-slide">
            <input
              v-show="searchActive"
              type="text"
              v-model="query"
              ref="mobileSearchInput"
              placeholder="Cari..."
              @blur="!preventBlur && closeSearch()"
              @keydown.esc="closeSearch"
              @keydown.enter="doSearch"
              class="w-32 pl-2 pr-8 py-1 rounded-lg outline-none border border-gray-300 transition-all duration-300 text-sm"
              :class="inputTextClass"
            />
          </transition>
          <MagnifyingGlassIcon
            class="absolute right-2 h-5 w-5 cursor-pointer transition-opacity duration-300"
            :class="scrolledPastHero ? 'text-black' : 'text-white'"
            @mousedown.prevent="handleMobileSearchClick"
          />
        </div>

        <!-- Hamburger Menu -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="p-2 rounded transition-all"
          :class="
            scrolledPastHero ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
          "
        >
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition name="slide-down">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-white border-t border-gray-200 shadow-lg"
        :style="scrolledPastHero ? {} : { backgroundColor: 'rgba(255, 255, 255, 0.95)' }"
      >
        <ul class="flex flex-col divide-y divide-gray-200">
          <li>
            <router-link
              to="/"
              class="block px-4 py-3 text-gray-900 hover:bg-gray-50 transition-colors"
              @click="mobileMenuOpen = false"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/destinasi"
              class="block px-4 py-3 text-gray-900 hover:bg-gray-50 transition-colors"
              @click="mobileMenuOpen = false"
              >Destinasi</router-link
            >
          </li>
          <li>
            <router-link
              to="/budaya-sejarah"
              class="block px-4 py-3 text-gray-900 hover:bg-gray-50 transition-colors"
              @click="mobileMenuOpen = false"
              >Budaya dan Sejarah</router-link
            >
          </li>
          <li>
            <router-link
              to="/peta-interaktif"
              class="block px-4 py-3 text-gray-900 hover:bg-gray-50 transition-colors"
              @click="mobileMenuOpen = false"
              >Peta Interaktif</router-link
            >
          </li>
          <li>
            <router-link
              to="/tentang"
              class="block px-4 py-3 text-gray-900 hover:bg-gray-50 transition-colors"
              @click="mobileMenuOpen = false"
              >Tentang</router-link
            >
          </li>
        </ul>
      </div>
    </transition>
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
const mobileMenuOpen = ref(false)
const preventBlur = ref(false)
const query = ref('')
const searchInput = ref<HTMLInputElement | null>(null)
const mobileSearchInput = ref<HTMLInputElement | null>(null)
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

const handleMobileSearchClick = () => {
  preventBlur.value = true

  if (searchActive.value) {
    doSearch()
  } else {
    openSearch()
    nextTick(() => {
      mobileSearchInput.value?.focus()
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

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
.slide-down-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}
</style>
