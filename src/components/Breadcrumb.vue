<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="flex items-center gap-2 text-sm md:text-base overflow-x-auto py-2 md:py-3">
    <router-link
      to="/"
      class="text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap shrink-0"
      >Home</router-link
    >

    <span class="text-gray-400 shrink-0">/</span>

    <template v-for="(item, index) in breadcrumbs" :key="index">
      <template v-if="index < breadcrumbs.length - 1">
        <router-link
          :to="item.path"
          class="text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap shrink-0"
          >{{ item.label }}</router-link
        >
        <span class="text-gray-400 shrink-0">/</span>
      </template>
      <template v-else>
        <span class="text-gray-900 font-medium whitespace-nowrap truncate">{{ item.label }}</span>
      </template>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface BreadcrumbItem {
  label: string
  path: string
}

interface Props {
  items?: BreadcrumbItem[]
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
})

const route = useRoute()

const breadcrumbs = computed(() => {
  if (props.items.length > 0) {
    return props.items
  }

  // Breadcrumb otomatis berdasarkan route
  const pathSegments = route.path.split('/').filter(Boolean)
  const items: BreadcrumbItem[] = []

  let currentPath = ''
  for (const segment of pathSegments) {
    currentPath += `/${segment}`
    const label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    items.push({
      label,
      path: currentPath,
    })
  }

  return items
})
</script>

<style scoped>
nav {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

nav::-webkit-scrollbar {
  height: 4px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 2px;
}

nav::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.8);
}
</style>
