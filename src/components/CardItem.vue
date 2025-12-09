<template>
  <router-link
    :to="resolvedLink"
    class="bg-white rounded-xl shadow hover:shadow-xl transition p-3 flex flex-col items-center border border-gray-300"
  >
    <div
      class="w-full aspect-square rounded-md overflow-hidden bg-gray-200 grid place-items-center"
    >
      <img v-if="image" :src="image" alt="Image" class="w-full h-full object-cover object-center" />
    </div>

    <p class="mt-3 text-center font-semibold text-gray-800">{{ name }}</p>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  slug: string
  name: string
  image?: string
  basePath?: string
}>()

const resolvedLink = computed(() => {
  let path = props.basePath
  if (!path.startsWith('/')) path = '/' + path
  path = path?.replace(/\/+$/, '')
  return `${path}/${props.slug}`
})
</script>
