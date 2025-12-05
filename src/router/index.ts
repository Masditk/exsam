import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Destinasi from '@/pages/Destinasi.vue'
import BudayaSejarah from '@/pages/BudayaSejarah.vue'
import Tentang from '@/pages/Tentang.vue'
import DetailDestinasi from '@/pages/DetailDestinasi.vue'
import PetaInteraktif from '@/pages/PetaInteraktif.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/destinasi', component: Destinasi },
    { path: '/budaya-sejarah', component: BudayaSejarah },
    {
      path: '/tentang',
      name: 'Tentang',
      component: Tentang,
      meta: {
        navbarColor: '#0F2462',
        offsetTop: 20,
      },
    },
    {
      path: '/destinasi/:id',
      component: DetailDestinasi,
      props: true,
      meta: {
        navbarColor: '#0F2462',
        offsetTop: 20,
      },
    },
    {
      path: '/peta-interaktif',
      component: PetaInteraktif,
      meta: {
        navbarColor: '#0F2462',
        offsetTop: 20,
      },
    },
  ],
})

export default router
