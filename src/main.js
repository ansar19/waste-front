/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full'
import {ValidationObserver} from 'vee-validate'
import ShardsVue from 'shards-vue';
Vue.component('ValidationObserver',ValidationObserver);
Vue.component('ValidationProvider',ValidationProvider);

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';
import 'vue-select/dist/vue-select.css';
import '@/assets/scss/meta-table.scss';

// Core
import App from './App.vue';
import router from './router';
import store from './store'

import vSelect from 'vue-select';

// Layouts
import Default from '@/layouts/Default.vue';


Vue.use(Vuex);


ShardsVue.install(Vue);

Vue.component('default-layout', Default);
Vue.component('v-select', vSelect);

const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.';
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` is the component hierarchy trace
  if (msg === ignoreWarnMessage) {
    msg = null;
    vm = null;
    trace = null;
  }
}

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
