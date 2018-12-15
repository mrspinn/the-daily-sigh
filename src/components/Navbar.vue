<template>
    <nav>
        <v-toolbar dark class="grey darken-3">
            <v-btn><v-icon small>menu</v-icon>&nbsp;Sections</v-btn>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn 
                    small flat class="caption" 
                    v-for="section in sections" 
                    :key="section"
                    @click="changeSection(section)">
                    {{section}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            sections: ["home", "opinion", "world", "national", "politics", "business"]

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

</style>
