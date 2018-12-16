import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { store } from './store.js'

Vue.config.productionTip = false

Vue.filter('formatSection', function (val) {
  if (val === 'home.json') {
    return 'Top Stories'
  } else {
    return val.charAt(0).toUpperCase() + val.slice(1).split('.')[0]
  }
})

Vue.filter('shorten', function (val) {
  // SHORTEN VARIOUS COMMON TOPIC PHRASES
  var short = val.replace('United States', 'US').replace(', Donald J', '')
  if (short.includes('(') && short.includes(')')) {
    short = short.slice(0, short.indexOf('(') - 1)
  }
  if (short.length > 30) {
    short = short.slice(0, 30) + '...'
  }
  return short
})

Vue.filter('capitalize', function (val) {
  return val.charAt(0).toUpperCase() + val.slice(1)
})

new Vue({
  store,
  mounted () {
    this.$store.dispatch('fetchStories')
  },
  render: h => h(App)
}).$mount('#app')
