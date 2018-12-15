<template>
    <div class="news">
        <a href="#app" v-smooth-scroll="{duration:500}" class="toTop"><v-icon app click="">keyboard_arrow_up</v-icon></a>
        <v-container class="pt-0" style="position: relative;">
              
            <v-layout class="justify-end mb-2">
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

            <app-article v-for="story in $store.getters.getStories.slice(0, this.storiesPerPage)" :key="story.url" :story="story"></app-article>
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
