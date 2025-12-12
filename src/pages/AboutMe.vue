<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="max-w-6xl mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold mb-8 text-center">Tentang Saya</h2>

    <div class="grid grid-cols-1 grid-rows-2">
      <img
        class="row-start-1 col-start-2 w-125 rounded-xl shadow mb-8"
        alt="Image"
        :src="imageTentang1"
      />

      <div>
        <h1 class="">Dimas Ramadhani</h1>
        <h2 class="">11231021 - INFORMATIKA - ITK</h2>

        <p class="text-gray-700 leading-relaxed mb-6">
          Saya adalah seorang mahasiswa Informatika di Institut Teknologi Kalimantan. Lorem ipsum
          adalah kesukaan saya dalam membuat sebuah dummy data
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
      <CardItem
        v-for="item in items"
        :key="item.id"
        :slug="item.slug"
        :name="item.name"
        :basePath="basePath"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import imageTentang1 from '@/assets/image 27.png'
import { ref, onMounted } from 'vue'
import CardItem from '@/components/CardItem.vue'
import skillData from '@/data/skill.json'

const items = ref(
  skillData.map((d) => ({
    ...d,
    image: new URL(`../assets/data/${d.image}`, import.meta.url).href,
  })),
)

const basePath = '/skill'

// defineProps<{
//   items: Array<{ id: number; slug: string; name: string; image?: string }>
//   basePath?: string
// }>()

const emit = defineEmits(['hero-height'])

onMounted(() => {
  emit('hero-height', 0)
})
</script>
