import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-config'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    stories: [],
    section: 'home.json',
    topic: 'None',
    filteredStories: [],
    filtered: false,
    apiError: false
  },
  getters: {
    getStories: state => {
      return state.stories
    },
    // DETERMINE MOST FREQUENT TOPICS(FACETS) APPEARING IN STORIES
    getTopics: state => {
      var facets = []
      state.stories.forEach(story => {
        facets = facets.concat(story.des_facet, story.geo_facet, story.org_facet, story.per_facet)
      })
      // DETERMINE THE FREQUENCY OF EACH FACET
      var frequency = {}
      facets.forEach(x => { frequency[x] = 0 })
      var uniques = facets.filter(x => {
        frequency[x]++
        return frequency[x] === 1
      })
      // SORT BY FREQUENCY
      return uniques.sort(function (a, b) {
        return frequency[b] - frequency[a]
      })
    },
    getSection: state => {
      return state.section
    },
    getFiltered: state => {
      return state.filteredStories
    },
    isFiltered: state => {
      return state.filtered
    },
    getCurrentTopic: state => {
      return state.topic
    },
    getAPIStatus: state => {
      return state.apiError
    }
  },
  mutations: {
    updateStories: (state, payload) => {
      state.stories = payload
      state.filtered = false
      state.topic = 'None'
    },
    updateSection: (state, payload) => {
      state.section = payload
    },
    updateFiltered: (state, payload) => {
      state.filteredStories = payload
      state.filtered = true
    },
    setTopic: (state, payload) => {
      state.topic = payload
    }
  },
  actions: {
    fetchStories: ({ commit, state }) => {
      axios.get(state.section).then(res => {
        state.apiError = false;
        commit('updateStories', res.data.results)
      }).catch(() => {
        state.apiError = true;
      })
    },
    changeSection: ({ commit }, payload) => {
      commit('updateSection', payload)
    },
    // RETRIEVE ONLY STORIES THAT CONTAIN A SPECIFIC TOPIC
    filterByTopic: ({ commit, state }, payload) => {
      var hasTopic = []
      state.stories.forEach(story => {
        var topics = []
        topics = topics.concat(story.des_facet, story.geo_facet, story.org_facet, story.per_facet)
        if (topics.includes(payload)) {
          hasTopic.push(story)
        }
      })
      commit('updateFiltered', hasTopic)
      commit('setTopic', payload)
    }

  }
})
