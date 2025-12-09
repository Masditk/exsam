import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Destinasi from '@/pages/Destinasi.vue'
import BudayaSejarah from '@/pages/BudayaSejarah.vue'
import Tentang from '@/pages/Tentang.vue'
import DetailDestinasi from '@/pages/DetailDestinasi.vue'
import PetaInteraktif from '@/pages/PetaInteraktif.vue'
import SearchResult from '@/pages/SearchPage.vue'
import DetailBudaya from '@/pages/DetailBudaya.vue'

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
      path: '/destinasi/:slug',
      component: DetailDestinasi,
      meta: {
        navbarColor: '#0F2462',
        offsetTop: 20,
      },
    },
    {
      path: '/budaya-sejarah/:slug',
      component: DetailBudaya,
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
    {
      path: '/search',
      component: SearchResult,
      meta: {
        navbarColor: '#0F2462',
        offsetTop: 40,
      },
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
