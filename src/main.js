import Vue from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faThList,
  faSpinner,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/main.scss';

library.add(faHome);
library.add(faThList);
library.add(faSpinner);
library.add(faArrowLeft);
library.add(faArrowRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
