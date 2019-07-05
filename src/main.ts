import Vue from "vue";
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import { router } from './router';

Vue.use(Vuetify);
Vue.use(VueRouter);


new Vue({
  router,
  el: "#root",
  render: h => h(App)
});
