<template>
    <div class="news">
        <!-- Smooth scroll button fixed -->
        <a href="#app" v-smooth-scroll="{duration:500}" class="toTop"><v-icon app click="">keyboard_arrow_up</v-icon></a>
        <v-container class="pt-0" style="position: relative;">
              
            <v-layout class="justify-space-between mb-2 align-end" row>
                <!-- Current Topic -->
                <v-flex class="caption">
                    <span class="pr-1"><v-icon small class="pr-1">filter_list</v-icon>Filtered Topic:</span>
                    <span class="grey--text">{{$store.getters.getCurrentTopic}}</span>
                </v-flex>
                <!-- Stories per page button -->
                <v-menu offset-y bottom right flat>
                    <template slot="activator">
                        <v-btn small flat>Stories per page</v-btn><v-chip flat outline small>{{storiesPerPage}}</v-chip>
                    </template>
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

            <!-- News feed. Show all stories if no topic is selected. -->
            <template v-if="!$store.getters.isFiltered">
                <app-article 
                    v-for="story in $store.getters.getStories.slice(0, this.storiesPerPage)" 
                    :key="story.url" 
                    :story="story">
                </app-article>
            </template>
            <!-- News feed. Show filtered stories if topic is selected. -->
            <template v-else>
                <app-article 
                    v-for="story in $store.getters.getFiltered.slice(0, this.storiesPerPage)" 
                    :key="story.url"
                    :story="story">
                </app-article>
            </template>

        </v-container>
    </div>
</template>

<script>
import Article from "./Article.vue";
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            pageArray: [5, 10, 15, 25, 50],
            storiesPerPage: 5
        }
    },
    methods: {
        setStoriesPerPage(num) {
            this.storiesPerPage = num;
        }
    },
    mounted () {
        
        axios
        .get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
        .then(response => {this.topStories = response.data.results; console.log(response)});
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
        right: 1rem
    }
</style>
