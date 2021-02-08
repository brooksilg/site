import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';
import Experience from '@/views/Experience.vue';
import Page404 from '@/views/Page404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
  },
  {
    path: '*',
    component: Page404,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
