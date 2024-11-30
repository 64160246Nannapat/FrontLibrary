import { createRouter, createWebHistory } from 'vue-router'
import HomeStudent from '@/components/student/HomeStudent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeStudent,
    },
  ],
})

export default router
