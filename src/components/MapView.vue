<template>
  <div id="map" class="w-full h-80 rounded-xl shadow"></div>
</template>

<script setup lang="ts">
import L from 'leaflet'
import { onMounted, watch } from 'vue'

const props = defineProps<{
  destinations: Array<{
    name: string
    lat: number
    lng: number
    image?: string
  }>
}>()

let map: L.Map | null = null
const markers: L.Marker[] = []

// Fungsi untuk membuat popup content
const createPopupContent = (dest: { name: string; image?: string }) => `
  <div class="w-[230px] p-3 rounded-xl bg-white shadow-lg">
    <h3 class="text-lg font-semibold text-black leading-tight mb-2">
      ${dest.name}
    </h3>
    <img
      src="${dest.image || 'https://via.placeholder.com/300'}"
      class="w-full h-[90px] object-cover rounded-lg mb-3"
    />
  </div>
`

onMounted(() => {
  if (!props.destinations.length) return

  // Inisialisasi map dengan posisi marker pertama
  const first = props.destinations[0]
  map = L.map('map').setView([first.lat, first.lng], 10)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map)

  // Tambahkan semua marker
  props.destinations.forEach((dest) => {
    const m = L.marker([dest.lat, dest.lng]).addTo(map!).bindPopup(createPopupContent(dest), {
      className: 'custom-popup',
    })
    markers.push(m)
  })
})

// Watch untuk props.destinations supaya marker bisa update jika berubah
watch(
  () => props.destinations,
  (newDestinations) => {
    if (!map) return

    // Hapus semua marker lama
    markers.forEach((m) => map.removeLayer(m))
    markers.length = 0

    if (!newDestinations.length) return

    // Set view ke marker pertama
    const first = newDestinations[0]
    map.setView([first.lat, first.lng], 12)

    // Tambahkan semua marker baru
    newDestinations.forEach((dest) => {
      const m = L.marker([dest.lat, dest.lng]).addTo(map).bindPopup(createPopupContent(dest), {
        className: 'custom-popup',
      })
      markers.push(m)
    })
  },
  { deep: true },
)
</script>

<style>
#map {
  z-index: 1;
}

.custom-popup .leaflet-popup-content-wrapper {
  padding: 0 !important;
  border-radius: 12px;
  background: transparent;
  box-shadow: none;
}

.custom-popup .leaflet-popup-content {
  margin: 0 !important;
}

.custom-popup .leaflet-popup-tip {
  background: white;
}
</style>
