<template>
  <div id="app" >
    <v-app class="grey lighten-3">
      <v-content>
        <app-navbar></app-navbar>
        <app-header></app-header>
        <app-news></app-news>
        <app-footer></app-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import News from './components/News.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    appNavbar: Navbar,
    appHeader: Header,
    appNews: News,
    appFooter: Footer,
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
