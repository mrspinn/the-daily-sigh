<template>
  <div class="header">
    <v-container>
      <h1 class="text-sm-center">The Daily Sigh</h1>
      <v-layout row justify-space-between>
        <v-flex>{{date}}</v-flex>
        <v-flex class="text-xs-center">
          <span class="subheading">Your trusted source for societal disappointment!!!</span>
        </v-flex>
        <v-flex class="text-xs-right">
          <span>Section: Top Stories</span>
        </v-flex>
      </v-layout>
      <hr>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    date() {
      var moment = require('moment');
      return moment().format("MMMM Do, YYYY");
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Merriweather', serif;
  font-size: 4rem;
  margin-bottom: 0.2rem;
}
h2 {
  font-size: 1rem;
  margin-top: 0.2rem;
}
</style>
