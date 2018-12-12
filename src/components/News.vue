<template>
    <div class="news">
        <div v-for="story in topStories" :key="story.url">
            <v-layout row class="justify-center">
                <v-flex xs12 sm10 md8>
                    <v-card>
                        <v-card-title class="headline">
                            {{story.title}}
                        </v-card-title>
                        <v-card-text>
                            {{story.abstract}}
                        </v-card-text>
                    </v-card>
                    <v-divider></v-divider>
                </v-flex>
            </v-layout>
            
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            topStories: null
        }
    },
    mounted () {
        
        axios
        .get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
        .then(response => {this.topStories = response.data.results; console.log(response)});
    }
}
</script>

<style>
    /* .news {
        width: 80%;
        margin: 0 auto;
        border-right: 1px solid #aaa;
        height: 100%;
    }
    .imageDiv {
        float: left;
        width: 40%;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
    .image {
        background: red; 
        height: 300px;
    }
    .caption {
        font-size: .6rem;
    }
    .content {
        display: inline;
    } */
</style>
