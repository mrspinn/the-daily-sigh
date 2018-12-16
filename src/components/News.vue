<template>
    <div class="news">
        <!-- SCROLL TO TOP -->
        <a
            href="#app"
            @click="$vuetify.goTo('#app', scrollOptions)"
            class="toTop hi"
            title="Scroll to Top">
            <v-icon app click="">keyboard_arrow_up</v-icon>
        </a>

        <v-container class="pt-0">
            <!-- NEWSFEED OPTIONS -->
            <v-layout class="justify-space-between align-center" row>
                <!-- CURRENT TOPIC FILTER -->
                <v-flex class="caption hidden-xs-only">
                    <span class="pr-1">
                        <v-icon small class="pr-1">filter_list</v-icon>
                        Filtered Topic:
                    </span>
                    <span class="grey--text">{{getCurrentTopic}}</span>
                </v-flex>
                <v-flex class="hidden-sm-and-up"></v-flex>
                <!-- STORIES PER PAGE BUTTON -->
                <v-menu offset-y bottom right flat>
                    <v-layout align-center slot="activator">
                        <v-btn small flat class="caption">Stories per page</v-btn>
                        <v-chip flat outline small>{{storiesPerPage}}</v-chip>
                    </v-layout>
                    <template v-for="number in pageArray">
                        <v-chip
                            small
                            :key="number"
                            @click="setStoriesPerPage(number)">
                            {{number}}
                        </v-chip>
                    </template>
                </v-menu>
            </v-layout>

            <v-fade-transition group>
                <!-- NEWS FEED. Show all stories if no topic is selected. -->
                <template v-if="!isFiltered">
                    <app-article
                        v-for="story in getStories.slice(0, this.storiesPerPage)"
                        :key="story.url"
                        :story="story">
                    </app-article>
                </template>
                <!-- NEWS FEED. Show filtered stories if topic is selected. -->
                <template v-else>
                    <app-article
                        v-for="story in getFiltered.slice(0, this.storiesPerPage)"
                        :key="story.url"
                        :story="story">
                    </app-article>
                </template>
            </v-fade-transition>

        </v-container>
    </div>
</template>

<script>
import Article from './Article.vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      pageArray: [5, 10, 15, 25, 50],
      storiesPerPage: 5,
      scrollOptions: {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      }
    }
  },
  computed: {
    ...mapGetters([
      'getStories',
      'getCurrentTopic',
      'isFiltered',
      'getFiltered'
    ])
  },
  methods: {
    setStoriesPerPage (num) {
      this.storiesPerPage = num
    }
  },
  components: {
    appArticle: Article
  }
}
</script>

<style>
    .toTop {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 2;
    }
</style>
