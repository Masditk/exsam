<template>
  <div class="w-full min-h-screen">
    <!-- Breadcrumb -->
    <div class="bg-gray-50 border-b border-gray-200 px-4 md:px-6 py-3">
      <Breadcrumb
        :items="[
          { label: 'Destinasi', path: '/destinasi' },
          { label: detail.name, path: '' },
        ]"
      />
    </div>

    <!-- Search Section - Terpisah dari Breadcrumb -->
    <div class="bg-white border-b border-gray-200 px-4 md:px-6 py-4">
      <div
        class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between max-w-7xl mx-auto"
      >
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900">{{ detail.name }}</h1>
        <p class="text-sm md:text-lg text-gray-600">{{ detail.lokasi }}</p>
      </div>
    </div>

    <!-- Content Area -->
    <div class="px-4 md:px-6 py-6 md:py-10 space-y-5 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
        <!-- Banner Gambar -->
        <div class="flex justify-center items-start">
          <img
            :src="detailImage"
            v-if="detailImage"
            :style="{ height: infoHeight + 'px' }"
            class="rounded-xl shadow object-contain w-full"
            ref="imageRef"
          />
        </div>

        <!-- Informasi Umum -->
        <div class="border rounded-xl p-4 md:p-6 shadow bg-white space-y-4 h-fit" ref="infoRef">
          <h3 class="text-lg md:text-xl font-semibold">Informasi Umum</h3>

          <div>
            <h4 class="font-medium text-gray-700">Alamat</h4>
            <p class="text-gray-600 text-sm md:text-base">{{ detail.alamat }}</p>
          </div>

          <div>
            <h4 class="font-medium text-gray-700">Instagram</h4>
            <a
              :href="`https://www.instagram.com/${detail.instagram}`"
              class="text-blue-600 hover:underline text-sm md:text-base"
              target="_blank"
              >{{ detail.instagram }}</a
            >
          </div>

          <button
            class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <span>Lihat Lokasi</span>
          </button>
        </div>
      </div>

      <!-- Deskripsi -->
      <div class="mt-6 md:mt-10">
        <p class="text-gray-700 leading-relaxed text-sm md:text-base">{{ detail.deskripsi }}</p>
      </div>

      <!-- Destinasi Lainnya -->
      <div class="mt-8 md:mt-12">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6">Temukan Destinasi Lainnya!</h2>
        <CardList basePath="destinasi" />
      </div>

      <div class="flex justify-center mt-8">
        <router-link to="/destinasi">
          <button
            class="px-6 md:px-8 py-2 md:py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-black transition text-sm md:text-base"
          >
            Lihat Semua
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, watch, computed, nextTick } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import CardList from '@/components/CardList.vue'
import destinasiData from '@/data/destinasi.json'

const route = useRoute()
const router = useRouter()

const slug = ref(route.params.slug as string)
const detail = ref<any>({})

// Refs untuk ukur tinggi div info
const infoRef = ref<HTMLDivElement | null>(null)
const imageRef = ref<HTMLImageElement | null>(null)
const infoHeight = ref(0)

// Load detail berdasarkan slug
function loadDetail(currentSlug: string) {
  const found = destinasiData.find((item) => item.slug === currentSlug)
  if (!found) {
    router.push('/not-found')
    return
  }
  detail.value = found

  nextTick(() => {
    if (infoRef.value) {
      infoHeight.value = infoRef.value.clientHeight
    }
  })
}

// Watch route untuk navigasi di page yang sama
watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug as string
    loadDetail(slug.value)
  },
  { immediate: true },
)

// Hitung URL gambar
const detailImage = computed(() => {
  if (!detail.value.image) return ''
  return new URL(`../assets/destinasi/${detail.value.image}`, import.meta.url).href
})

const emit = defineEmits(['hero-height'])
onMounted(() => {
  emit('hero-height', 0)
  loadDetail(slug.value)
})
</script>
