<template>
  <div id="map-container" class="w-full h-80 rounded-xl shadow">
    <div id="map" class="w-full h-full"></div>
  </div>
</template>

<script setup lang="ts">
import L from 'leaflet'
import { onMounted, watch, nextTick, ref, onBeforeUnmount } from 'vue'

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
const mapInitialized = ref(false)

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

const initializeMap = () => {
  if (mapInitialized.value || !props.destinations || !props.destinations.length) return

  try {
    const mapElement = document.getElementById('map')
    if (!mapElement) {
      console.warn('Map element not found, retrying...')
      return
    }

    // Inisialisasi map dengan posisi marker pertama
    const first = props.destinations[0]
    if (!first || typeof first.lat !== 'number' || typeof first.lng !== 'number') {
      console.warn('Invalid destination data')
      return
    }

    map = L.map('map').setView([first.lat, first.lng], 10)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map)

    // Tambahkan semua marker
    props.destinations.forEach((dest) => {
      if (typeof dest.lat === 'number' && typeof dest.lng === 'number') {
        const m = L.marker([dest.lat, dest.lng]).addTo(map!).bindPopup(createPopupContent(dest), {
          className: 'custom-popup',
        })
        markers.push(m)
      }
    })

    mapInitialized.value = true
  } catch (error) {
    console.error('Error initializing map:', error)
  }
}

onMounted(async () => {
  await nextTick()
  initializeMap()
})

onBeforeUnmount(() => {
  if (map) {
    markers.forEach((m) => {
      if (map) map.removeLayer(m)
    })
    markers.length = 0
    map.remove()
    map = null
  }
})

// Watch untuk props.destinations supaya marker bisa update jika berubah
watch(
  () => props.destinations,
  (newDestinations) => {
    if (!map || !mapInitialized.value) return

    // Hapus semua marker lama
    markers.forEach((m) => {
      if (map) map.removeLayer(m)
    })
    markers.length = 0

    if (!newDestinations.length) return

    // Set view ke marker pertama
    const first = newDestinations[0]
    if (first) {
      map.setView([first.lat, first.lng], 12)
    }

    // Tambahkan semua marker baru
    newDestinations.forEach((dest) => {
      if (!map) return
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
