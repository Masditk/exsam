<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav
    id="navbar"
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm"
    :class="scrolledPastHero ? 'bg-white shadow-md' : 'bg-transparent'"
    :style="{ backgroundColor: background }"
  >
    <div class="flex items-center justify-between py-3 px-6">
      <img
        :src="logo"
        alt="Logo"
        class="h-10 w-auto object-contain transition-all duration-300"
        :class="scrolledPastHero ? 'brightness-0 invert-0' : 'brightness-0 invert'"
      />

      <ul
        class="flex gap-6 font-semibold text-lg transition-all duration-300"
        :class="scrolledPastHero ? 'text-black' : 'text-white'"
      >
        <router-link to="/" class="cursor-pointer hover:opacity-60">Home</router-link>
        <router-link to="/destinasi" class="cursor-pointer hover:opacity-60">Destinasi</router-link>
        <router-link to="/budaya-sejarah" class="cursor-pointer hover:opacity-60"
          >Budaya dan Sejarah</router-link
        >
        <router-link to="/peta-interaktif" class="cursor-pointer hover:opacity-60"
          >Peta Interaktif</router-link
        >
        <router-link to="/tentang" class="cursor-pointer hover:opacity-60">Tentang</router-link>
      </ul>

      <div class="relative flex items-center w-[50px] md:w-[60px] justify-end">
        <MagnifyingGlassIcon
          v-show="!searchActive"
          class="h-7 w-7 cursor-pointer transition-opacity duration-300"
          :class="[
            scrolledPastHero ? 'text-black' : 'text-white',
            searchActive ? 'opacity-0 pointer-events-none' : 'opacity-100',
          ]"
          @click="openSearch"
        />

        <transition name="fade-slide">
          <div
            v-show="searchActive"
            class="absolute right-0 flex items-center transition-all duration-300"
          >
            <MagnifyingGlassIcon
              class="absolute left-2 h-5 w-5 pointer-events-none transition-all duration-300"
              :class="scrolledPastHero ? 'text-black' : 'text-white'"
            />

            <input
              type="text"
              v-model="query"
              ref="searchInput"
              placeholder="Cari..."
              @blur="closeSearch"
              @keydown.esc="closeSearch"
              class="w-40 md:w-48 pl-9 pr-3 py-1 rounded-lg outline-none border border-gray-300 transition-all duration-300"
              :class="inputTextClass"
            />
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick, computed } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import logo from '@/assets/image-1-5-removebg-preview-1.png'

const searchActive = ref(false)
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
