import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Curriculum from '@/views/Curriculum.vue';
import Lesson from '@/views/Lesson.vue';
import Tests from '@/views/Tests.vue';
import Statistics from '@/views/Statistics.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/curriculum',
    name: 'Curriculum',
    component: Curriculum,
  },
  {
    path: '/lessons/:id',
    name: 'Lesson',
    component: Lesson,
    children: [
      {
        path: 'tests',
        name: 'LessonTests',
        component: Tests,
      },
      {
        path: 'statistics',
        name: 'LessonStatistics',
        component: Statistics,
      },
    ],
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
