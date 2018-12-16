<template>
    <div class="mb-1">
        <v-layout row class="justify-center">
            <v-flex xs12 sm10>
                <v-card>

                    <!-- TITLE, AUTHOR, ABSTRACT -->
                    <v-card-title class="pb-0">
                        <v-layout column>
                            <v-flex>
                                <a :href="story.url" target="blank" class="black--text headline">{{story.title}}</a>
                            </v-flex>
                            <v-flex>
                                <div class="caption mb-1">{{story.byline}}</div>
                            </v-flex>
                        </v-layout>
                    </v-card-title>
                    <v-card-text class="pt-0">{{story.abstract}}</v-card-text>

                    <!-- IMAGE -->
                    <div v-if="image">
                        <a :href="story.url" target="blank">
                            <v-img :src="image.url"></v-img>
                        </a>
                        <v-card-text class="caption pa-0 pl-1" v-if="image.caption">
                            <span>{{image.caption}} </span>
                            <span class="grey--text">- {{image.copyright}}</span>
                        </v-card-text>

                    </div>
                </v-card>
                <v-divider></v-divider>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
  props: ['story'],
  computed: {
    // Only retrieve large image
    image () {
      return this.story.multimedia.filter(obj => {
        return obj.format === 'superJumbo'
      })[0]
    }
  }
}
</script>
<style>
    a {
        text-decoration: none;
    }
</style>
