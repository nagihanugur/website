import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./routes"
import {store} from "./store/store"
import VueResource from "vue-resource"



Vue.use(VueRouter);
Vue.use(VueResource);

//Vue.http.options.root ="https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY";
Vue.http.options.root = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=769b3bca59af48e8b55b85e68188d6a3&";

const router = new VueRouter({
  routes : routes,
  mode : 'history',
  
});


new Vue({
  el: '#app',
  router : router,
  store : store,
  render: h => h(App)
})
