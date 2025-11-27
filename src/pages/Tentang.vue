<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="max-w-6xl mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold mb-8 text-center">Tentang Samarinda</h2>

    <div class="grid grid-cols-2 grid-rows-2 gap-6 mb-12">
      <img
        class="row-start-1 col-start-1 w-full rounded-xl shadow mb-8"
        alt="Image"
        :src="imageTentang1"
      />

      <img
        class="row-start-2 col-start-2 w-full rounded-xl shadow"
        alt="Image"
        :src="imageTentang2"
      />

      <p class="text-gray-700 leading-relaxed mb-6">
        Samarinda merupakan kota sekaligus ibu kota provinsi dari Provinsi Kalimantan Timur,
        Indonesia. Kota ini juga merupakan kota dengan penduduk terbesar di Pulau Kalimantan, yaitu
        dengan jumlah penduduk sebanyak 881.225 jiwa (2024). Samarinda memiliki wilayah seluas 783
        km² dengan kondisi geografi daerah berbukit dengan ketinggian bervariasi dari 10 sampai 200
        meter dari permukaan laut.
      </p>

      <p class="text-gray-700 leading-relaxed mb-6">
        Kota Samarinda dibelah oleh Sungai Mahakam dan menjadi gerbang menuju pedalaman Kalimantan
        Timur melalui jalur sungai, darat maupun udara. Samarinda terkenal dengan perkembangannya
        yang ekspansif seperti Pelabuhan Samarinda dan Pelabuhan Palaran yang keduanya merupakan
        pelabuhan tersibuk di Kalimantan Timur, serta jumlah penduduk terbesar.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import imageTentang1 from '@/assets/image 27.png'
import imageTentang2 from '@/assets/image 28.png'
import { onMounted } from 'vue'

const emit = defineEmits(['change-navbar-bg'])

onMounted(() => {
  emit('change-navbar-bg', '#0F2462')
})
</script>
