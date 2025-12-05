<template>
  <div id="map" class="w-full h-80 rounded-xl shadow"></div>
</template>

<script setup lang="ts">
import L from 'leaflet'
import { onMounted, watch } from 'vue'

const props = defineProps<{
  lat: number
  lng: number
}>()

let map: L.Map | null = null

onMounted(() => {
  map = L.map('map').setView([props.lat, props.lng], 15)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map)

  L.marker([props.lat, props.lng]).addTo(map)
})

watch(
  () => [props.lat, props.lng],
  ([lat, lng]) => {
    if (map && lat != null && lng != null) {
      map.setView([lat, lng], 15)
      L.marker([lat, lng]).addTo(map)
    }
  },
)
</script>

<style>
#map {
  z-index: 1;
}
</style>
