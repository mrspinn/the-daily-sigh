<template>
  <div class="header">
    <v-container class="pb-0 fluid">
      <!-- HEADER -->
      <h1 class="text-xs-center">The Daily Sigh</h1>
      <!-- SUBHEADER -->
      <v-layout row class="justify-space-between" wrap>
        <v-flex xs12 sm2 class="text-xs-center text-sm-left">{{date}}</v-flex>
        <v-flex xs12 sm8 class="text-xs-center">
          <span class="subheading">Your trusted source for societal disappointment!!!</span>
        </v-flex>
        <!-- SECTION SELECTION MENU -->
        <v-flex sm2 class="text-xs-center text-sm-right hidden-xs-only" >
          <v-menu transition="slide-y-transition" offset-y bottom>
            <template slot="activator">
              <v-layout row wrap>
                <span class="grey--text">Section:&nbsp;</span>
                <span class="font-weight-bold text-align-top">
                  {{getSection | formatSection }}
                  <v-icon small>arrow_drop_down</v-icon>
                </span>
              </v-layout>
            </template>
            <v-list dense class="overflow-hidden">
              <v-list-tile
                v-for="(section, index) in sections.slice(0, 15)"
                :key="index"
                @click="changeSection(section)"
                class="section"
              >{{ section | capitalize }}
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
      </v-layout>
      <hr>
      <!-- TOPIC CHIPS -->
      <v-layout row align-center class="hidden-sm-and-down">
        <v-flex class="text-xs-center">In the<br>News:</v-flex>
        <v-flex xs12 s12 md11>
          <v-layout wrap class="justify-space-between">
            <template v-for="(topic, index) in getTopics.slice(0, 12)">
              <v-flex v-if="topic.length > 25" bottom :key="index" lg2 md3 sm4>
                <v-layout class="justify-center">
                  <v-tooltip>
                    <v-chip 
                      flat small slot="activator"
                      @click="changeTopic(topic)">
                      {{topic | shorten}}
                    </v-chip>
                    <span>{{topic}}</span>
                  </v-tooltip>
                </v-layout>
              </v-flex>
              <v-flex v-else :key="index" lg2 md3 sm4>
                <v-layout class="justify-center">
                  <v-chip 
                    flat small 
                    @click="changeTopic(topic)">
                    {{topic | shorten}}
                  </v-chip>
                </v-layout>
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
      </v-layout>  
      <hr class="hidden-sm-and-down">    
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      sections: ["home", "opinion", "world", "national", "politics", "upshot", "nyregion", "business", "technology", "science", "health", "sports", "arts", "books", "movies", "theater", "sundayreview", "fashion", "tmagazine", "food", "travel", "magazine", "realestate", "automobiles", "obituaries", "insider"]
    }
  },
  computed: {
    ...mapGetters([
        'getStories',
        'getTopics',
        'getSection'
    ]),
    date() {
      var moment = require('moment');
      return moment().format("MMMM Do, YYYY");
    }
  },
  methods: {
    changeSection(section) {
      this.$store.dispatch('changeSection', section + '.json');
      this.$store.dispatch('fetchStories');
    },
    changeTopic(topic) {
      this.$store.dispatch('filterByTopic', topic);
    }
  },
  filters: {
    shorten(val) {
      var short = val.replace("United States", "US").replace(", Donald J", "")
      if (short.length > 30) {
        short = short.slice(0, 30) + "...";
      }
      return short;
    },
    capitalize(val) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    },
    formatSection(val) {
      if (val == 'home.json') {
        return "Top Stories"
      } else {
        return val.charAt(0).toUpperCase() + val.slice(1).split('.')[0];
      } 
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
.section {
    height: 30px !important;
}
.v-list--dense .v-list__tile {
  height: 30px !important;
}
</style>
