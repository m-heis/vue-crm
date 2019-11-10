import Vue from 'vue'
import Vuelidate from "vuelidate/src";
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from "./filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from "./utils/message.plugin"
import Loader from "@/components/app/Loader";
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('dateFilter', dateFilter);
Vue.filter('currencyFilter', currencyFilter);
Vue.component('Loader', Loader);

firebase.initializeApp({
    apiKey: "AIzaSyDx9x28D2GGwk9DoiH-ZdUEZJdr5cPrP00",
    authDomain: "vue-crm-cdca2.firebaseapp.com",
    databaseURL: "https://vue-crm-cdca2.firebaseio.com",
    projectId: "vue-crm-cdca2",
    storageBucket: "vue-crm-cdca2.appspot.com",
    messagingSenderId: "124349131465",
    appId: "1:124349131465:web:a14fc1718fc834727ffb18",
    measurementId: "G-KVQ35XYG4Q"
});

let app;

firebase.auth().onAuthStateChanged(() => {
    if(!app){
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app');
    }
});
