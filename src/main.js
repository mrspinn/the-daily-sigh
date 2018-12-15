import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from "axios";
import { store } from './store.js';
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

axios.defaults.baseURL = "https://api.nytimes.com/svc/topstories/v2";
axios.defaults.params = {};
axios.defaults.params['api-key'] = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"


new Vue({
  store,
  mounted() {
    this.$store.dispatch('fetchStories');
  },
  render: h => h(App),
}).$mount('#app')
