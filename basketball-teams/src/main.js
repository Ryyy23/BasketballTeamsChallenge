// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import firebase from 'firebase';
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyBSxBgMMyZmBWxB2nRQKQohq07hZ3sQ-_0",
  authDomain: "basketballmanager-b61b0.firebaseapp.com",
  databaseURL: "https://basketballmanager-b61b0.firebaseio.com",
  projectId: "basketballmanager-b61b0",
  storageBucket: "basketballmanager-b61b0.appspot.com",
  messagingSenderId: "832868281661",
  appId: "1:832868281661:web:2f82ea35bdcf837a68a954",
  measurementId: "G-G3J8X2SYMS"
};

firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
