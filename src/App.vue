<template>
  <div id="app">
    <v-app>
      <app-navbar></app-navbar>
      <app-header></app-header>
      <app-news></app-news>
    </v-app>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import News from './components/News.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    appNavbar: Navbar,
    appHeader: Header,
    appNews: News
  }
}
</script>

<style>
html {
  min-height: 100%;
}
body {
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
