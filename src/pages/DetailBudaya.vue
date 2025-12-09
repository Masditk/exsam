<template>
  <div class="w-full px-6 py-10 space-y-10">
    <!-- Judul -->
    <div>
      <h1 class="text-3xl font-bold text-gray-900">{{ detail.name }}</h1>
      <p class="text-lg text-gray-600">{{ detail.lokasi }}</p>
    </div>

    <!-- Grid Gambar dan Deskripsi -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div class="flex justify-center items-start">
        <img
          :src="detailImage"
          v-if="detailImage"
          :style="{ height: infoHeight + 'px' }"
          class="rounded-xl shadow object-contain"
          ref="imageRef"
        />
      </div>

      <!-- Deskripsi Budaya -->
      <div class="border rounded-xl p-6 shadow bg-white space-y-4 h-fit" ref="infoRef">
        <h3 class="text-xl font-semibold">Deskripsi</h3>
        <p class="text-gray-700 leading-relaxed">
          {{ detail.deskripsi }}
        </p>
      </div>
    </div>

    <!-- Sejarah Budaya -->
    <div class="border rounded-xl p-6 shadow bg-white space-y-2">
      <h3 class="text-xl font-semibold mb-2">Sejarah</h3>
      <p class="text-gray-700 leading-relaxed">{{ detail.sejarah }}</p>
    </div>

    <!-- Budaya Lainnya -->
    <div>
      <h2 class="text-2xl font-semibold mb-4">Temukan Budaya Lainnya!</h2>
    </div>

    <div>
      <CardList basePath="budaya-sejarah" />
    </div>

    <!-- Lihat Semua -->
    <router-link class="flex justify-center" to="/budaya-sejarah">
      <button class="px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-black transition">
        Lihat Semua
      </button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, watch, computed, nextTick } from 'vue'
import CardList from '@/components/CardList.vue'
import budayaData from '@/data/budaya-sejarah.json'

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
  const found = budayaData.find((item) => item.slug === currentSlug)
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
  return new URL(`../assets/budaya-sejarah/${detail.value.image}`, import.meta.url).href
})

const emit = defineEmits(['hero-height'])

onMounted(() => {
  emit('hero-height', 0)
})
</script>
