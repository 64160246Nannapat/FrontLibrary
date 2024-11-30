import { createRouter, createWebHistory } from 'vue-router'
import HomeStudent from '@/components/student/HomeStudent.vue'
import BookForm from '@/components/BookForm.vue'
import BookStatus from '@/components/BookStatus.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeStudent,
    },
    {
      path: '/form',
      name: 'book-form',
      component: BookForm,
    },
    {
      path: '/status',
      name: 'book-status',
      component: BookStatus,
    },
  ],
})

export default router
