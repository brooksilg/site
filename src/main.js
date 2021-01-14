import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import scrollDirective from './assets/js/directives';

import '@/assets/css/tailwind.css';
import '@/assets/css/app.css';
import '@/assets/fonts/fonts.css';
import '@fontsource/vollkorn';

Vue.config.productionTip = false;

Vue.directive('scroll', scrollDirective);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
