import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import store2 from '@/store/index2.ts';


Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
Vue.prototype.$store2 = store2;  //直接用 this.$store2 即可完成引用


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
