<template>
  <div id="map" class="w-full h-80 rounded-xl shadow"></div>
</template>

<script setup lang="ts">
import L from 'leaflet'
import { onMounted, watch } from 'vue'

const props = defineProps<{
  lat: number
  lng: number
  selectedDestination: {
    name: string
    image: string
  } | null
}>()

let map: L.Map | null = null
let marker: L.Marker | null = null

onMounted(() => {
  map = L.map('map').setView([props.lat, props.lng], 15)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map)

  const popupContent = `
    <div class="w-[230px] p-3 rounded-xl bg-white shadow-lg">
      <h3 class="text-lg font-semibold text-black leading-tight mb-2">
        ${props.selectedDestination?.name || 'Destinasi'}
      </h3>

      <img
        src="${props.selectedDestination?.image || 'https://via.placeholder.com/300'}"
        class="w-full h-[90px] object-cover rounded-lg mb-3"
      />

      <div class="flex gap-2">
        <button
          class="flex-1 flex items-center justify-center gap-1 border border-blue-600 rounded-lg py-1 text-xs font-medium hover:bg-blue-50 transition"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12Z" fill="#1D1B20"/>
        </svg>
          Lokasi
        </button>

        <button
          class="flex-1 flex items-center justify-center gap-1 border border-blue-600 rounded-lg py-1 text-xs font-medium hover:bg-blue-50 transition"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21Z" fill="#1D1B20"/>
          </svg>
          Detail
        </button>
      </div>
    </div>
  `

  marker = L.marker([props.lat, props.lng]).addTo(map).bindPopup(popupContent, {
    className: 'custom-popup',
  })
})

watch(
  () => [props.lat, props.lng],
  ([lat, lng]) => {
    if (!map || lat == null || lng == null) return

    map.setView([lat, lng], 15)

    if (marker) map.removeLayer(marker)
  },
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
