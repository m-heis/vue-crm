import Vue from 'vue'
import Vuelidate from "vuelidate/src";
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from "./filters/date.filter";
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.filter('dateFilter', dateFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
