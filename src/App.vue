<template>
  <div id="app" >
    <v-app class="grey lighten-3">
      <v-content v-if="!$store.getters.getAPIStatus">
        <app-navbar></app-navbar>
        <app-header></app-header>
        <app-news></app-news>
        <app-footer></app-footer>
      </v-content>
      <v-content v-else>
        <v-container class="text-xs-center mt-5">
          <div class="display-1">Please request an API Key from<br><a href="https://developer.nytimes.com/">https://developer.nytimes.com/</a> and place it in the <br>axios-config.js file.</div>
          <br>
          <br>
          <div class="display-1">Thanks! Enjoy <i><u>The Daily Sigh</u></i> !</div>
        </v-container>
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
    appFooter: Footer
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
