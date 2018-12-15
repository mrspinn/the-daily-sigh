import Vue from 'vue';
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        stories: [],
        section: 'home.json'
    },
    getters: {
        getStories: state => {
            return state.stories;
        },
        getTopics: state => {
            var facets = [];
            state.stories.forEach(story => {
                facets = facets.concat(story.des_facet, story.geo_facet, story.org_facet, story.per_facet)
            });          
            // DETERMINE THE FREQUENCY OF EACH FACET
            var frequency = {};
            facets.forEach(x => {frequency[x] = 0;})
            var uniques = facets.filter(x => {
                frequency[x]++;
                return frequency[x] == 1;
            });          
            //SORT BY FREQUENCY
            return uniques.sort(function(a, b) {
                return frequency[b] - frequency[a];
            });
        },
        getSection: state => {
            return state.section;
        },
    },
    mutations: {
        updateStories: (state, payload) => {
            state.stories = payload
        },
        updateSection: (state, payload) => {
            state.section = payload
        }
    },
    actions: {
        fetchStories: ({commit, state}) => {
            axios.get(state.section).then( res =>{
                commit('updateStories', res.data.results);
            });
        },
        changeSection: ({commit}, payload) => {
            commit('updateSection', payload);
        }
    }
});