<template>
  <div class="w-full px-6 py-10 space-y-5">
    <!-- Judul -->
    <div>
      <h1 class="text-3xl font-bold text-gray-900">{{ detail.nama }}</h1>
      <p class="text-lg text-gray-600">{{ detail.lokasi }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-start">
      <!-- Banner Gambar -->
      <img :src="image24" class="w-full rounded-xl shadow" />

      <!-- Informasi Umum -->
      <div class="border rounded-xl p-6 shadow bg-white space-y-2 h-fit">
        <h3 class="text-xl font-semibold">Informasi Umum</h3>

        <div>
          <h4 class="font-medium text-gray-700">Alamat</h4>
          <p class="text-gray-600">
            {{ detail.alamat }}
          </p>
        </div>

        <div>
          <h4 class="font-medium text-gray-700">Instagram</h4>
          <a
            href="https://www.instagram.com/puncak_samarinda/"
            class="text-blue-600 hover:underline"
            target="_blank"
            >{{ detail.instagram }}</a
          >
        </div>

        <button
          class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <span>Lihat Lokasi</span>
        </button>
      </div>
    </div>

    <!-- Deskripsi -->
    <p class="text-gray-700 leading-relaxed max-w-3xl">
      {{ detail.deskripsi }}
    </p>

    <!-- Destinasi Lainnya -->
    <div>
      <h2 class="text-2xl font-semibold mb-4">Temukan Destinasi Lainnya!</h2>
    </div>

    <!-- Lihat Semua -->
    <div>
      <CardList
        :items="[
          { id: 1, name: 'Croatia' },
          { id: 2, name: 'Morocco' },
          { id: 3, name: 'Mexico' },
        ]"
      />
    </div>

    <div class="flex justify-center">
      <button class="px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-black transition">
        Lihat Semua
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import image24 from '@/assets/image 24.png'
import CardList from '@/components/CardList.vue'

const route = useRoute()
const destinasiId = Number(route.params.id)

const detail = {
  nama: `Tempat Wisata ${destinasiId}`,
  lokasi: 'Samarinda, Kalimantan Timur',
  deskripsi:
    'Puncak Samarinda adalah destinasi wisata alam yang menawarkan pemandangan indah kota Samarinda dari ketinggian. Tempat ini sangat cocok untuk bersantai, berfoto, dan menikmati udara segar.',
  alamat: 'Jl. Puncak Samarinda, Samarinda, Kalimantan Timur',
  instagram: '@puncak_samarinda',
}

const emit = defineEmits(['hero-height'])

onMounted(() => {
  emit('hero-height', 0)
})
</script>
