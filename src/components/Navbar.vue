<template>
    <nav>
        <!-- NAVBAR -->
        <v-toolbar dark class="grey darken-3" height="45px">
            <v-btn @click="drawer = !drawer" small class="caption text-align-center"><v-icon small>menu</v-icon>&nbsp;Sections</v-btn>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn 
                    small flat class="caption" 
                    v-for="section in navbarSections" 
                    :key="section"
                    @click="changeSection(section)">
                    {{section}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    
        <!-- SIDE DRAWER -->
        <v-navigation-drawer v-model="drawer" app dark class="grey darken-3">
            <v-list>
                <v-subheader class="display-2 grey--text">Sections</v-subheader>
                <v-layout row wrap>
                    <v-flex xs12 sm6 v-for="section in sections" :key="section">
                        <v-list-tile @click="changeSection(section)">
                            <v-list-tile-content>
                                - {{section | formatSection}}
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-flex>
                </v-layout>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navbarSections: ["home", "opinion", "world", "national", "politics", "business"],
            sections: [
                    "home", "opinion", "world", "national", "politics", "upshot", "nyregion", "business", "technology",
                    "science", "health", "sports", "arts", "books", "movies", "theater", "sundayreview", "fashion", "tmagazine",
                    "food", "travel", "magazine", "realestate", "automobiles", "obituaries", "insider"
                ],
            drawer: false
        }
    },
    methods: {
        changeSection(section) {
            this.$store.dispatch('changeSection', section + '.json');
            this.$store.dispatch('fetchStories');
        }
    }
}
</script>

<style>
    nav {
        z-index: 2;
    }
</style>
