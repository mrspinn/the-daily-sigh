<template>
  <div id="app">
    <app-header></app-header>
    <app-news></app-news>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import News from './components/News.vue'

export default {
  name: 'app',
  components: {
    appHeader: Header,
    appNews: News
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
</style>
