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
                class="w-full border border-black/30 rounded-xl px-3 py-2 md:py-2.5 text-base md:text-lg font-normal bg-white pr-10"
              >
                <option>Semua Kecamatan</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-lg md:text-xl font-medium text-black mb-2"> Pencarian </label>
            <input
              type="text"
              placeholder="Cari destinasi disini..."
              class="w-full border border-black/30 rounded-xl px-3 py-2 md:py-2.5 text-base md:text-lg font-normal"
            />
          </div>
        </div>
      </div>

      <MapView
        :lat="detail.lat"
        :lng="detail.lng"
        :selectedDestination="{
          name: 'Air Terjun Tanah Merah',
          image: image,
        }"
      />

      <div class="mt-5">
        <h2 class="text-2xl font-semibold mb-4">Temukan Destinasi Lainnya!</h2>
      </div>

      <div>
        <CardList
          title="Destinasi Wisata"
          subtitle="Destinasi wisata yang ada di Samarinda"
          :items="[
            { id: 1, name: 'Croatia' },
            { id: 2, name: 'Morocco' },
            { id: 3, name: 'Mexico' },
          ]"
        />
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
import { onMounted } from 'vue'
import MapView from '@/components/MapView.vue'
import CardList from '@/components/CardList.vue'
import image from '@/assets/image 24.png'

const detail = {
  lat: -0.4501,
  lng: 117.1495,
}

const emit = defineEmits(['hero-height'])

onMounted(() => {
  emit('hero-height', 0)
})
</script>
