<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-[1728px] mx-auto px-6 md:px-12 lg:px-26 py-8 md:py-14">
      <h1
        class="text-2xl md:text-4xl lg:text-5xl font-bold text-[#4169E1] mb-4 md:mb-6 leading-tight"
      >
        Peta Detinasi Wisata Samarinda
      </h1>

      <p
        class="text-sm md:text-lg lg:text-xl font-medium text-black mb-6 md:mb-10 leading-normal max-w-4xl"
      >
        Peta Wisata Kabupaten Karanganyar menampilkan berbagai titik lokasi destinasi menarik, mulai
        dari keindahan alam yang memukau hingga kekayaan budaya. Temukan setiap lokasi dengan pesona
        uniknya yang berbeda.
      </p>

      <div class="border border-black/30 rounded-[18px] p-5 md:p-7 mb-8 md:mb-12 max-w-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <label class="block text-lg md:text-xl font-medium text-black mb-2"> Kecamatan </label>
            <div class="relative">
              <select
                v-model="selectedKecamatan"
                class="w-full border border-black/30 rounded-xl px-3 py-2 md:py-2.5 text-base md:text-lg font-normal bg-white pr-10"
              >
                <option>Semua Kecamatan</option>
                <option v-for="lok in uniqueKecamatan" :key="lok" :value="lok">
                  {{ lok }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-lg md:text-xl font-medium text-black mb-2"> Pencarian </label>
            <input
              type="text"
              v-model="search"
              placeholder="Cari destinasi disini..."
              class="w-full border border-black/30 rounded-xl px-3 py-2 md:py-2.5 text-base md:text-lg font-normal"
            />
          </div>
        </div>
      </div>

      <MapView :destinations="filteredDestinations || []" />

      <div class="mt-5">
        <h2 class="text-2xl font-semibold mb-4">Temukan Destinasi Lainnya!</h2>
      </div>

      <div>
        <CardList basePath="destinasi" />
      </div>

      <div class="flex justify-center mt-5">
        <button
          class="px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-black transition"
        >
          Lihat Semua
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import MapView from '@/components/MapView.vue'
import CardList from '@/components/CardList.vue'
import destinasiData from '@/data/destinasi.json'

const search = ref('')
const selectedKecamatan = ref('Semua Kecamatan')

const filteredDestinations = computed(() =>
  destinasiData
    .filter((dest) => {
      const matchName = dest.name.toLowerCase().includes(search.value.toLowerCase())

      const matchKec =
        !selectedKecamatan.value || selectedKecamatan.value === 'Semua Kecamatan'
          ? true
          : dest.lokasi === selectedKecamatan.value

      return matchName && matchKec
    })
    .map((d) => ({
      // Kirimkan semua properti penting, dan ubah `image` menjadi URL penuh bila ada
      ...d,
      image: d.image ? new URL(`../assets/destinasi/${d.image}`, import.meta.url).href : undefined,
    })),
)

const uniqueKecamatan = computed(() => {
  const kecs = destinasiData.map((d) => d.lokasi)
  return Array.from(new Set(kecs))
})

const emit = defineEmits(['hero-height'])

onMounted(() => {
  emit('hero-height', 0)
})
</script>
