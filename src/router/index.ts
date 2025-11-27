import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Destinasi from '@/pages/Destinasi.vue'
import BudayaSejarah from '@/pages/BudayaSejarah.vue'
import Tentang from '@/pages/Tentang.vue'

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
        offsetTop: 15,
      },
    },
  ],
})

export default router
