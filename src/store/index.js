import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    team: [
      {name: 'John Smith', role: 'Designer', avatar: 'assets/1.jpg'},
      {name: 'Kevin White', role: 'Frontend', avatar: 'assets/2.jpg'},
      {name: 'Elise Smile', role: 'Backend', avatar: 'assets/3.jpg'},
      {name: 'Kate Brown', role: 'SEO', avatar: 'assets/4.jpg'}
    ],
    projects: [
      {title: 'Design a new website', person: 'John Smith', due: '1 Jan 2019', status: 'ongoing', content: 'Lorem text'},
      {title: 'Code up the homepage', person: 'Kevin White', due: '12 Sep 2019', status: 'complete', content: 'Lorem text'},
      {title: 'Design video thumbnails', person: 'Elise Smile', due: '10 Mar 2019', status: 'ongoing', content: 'Lorem text'},
      {title: 'Create a community forum', person: 'Kate Brown', due: '24 Nov 2019', status: 'overdue', content: 'Lorem text'},
      {title: 'Redesign one website', person: 'John Smith', due: '12 Feb 2019', status: 'ongoing', content: 'Lorem text'}
    ]
  },
  mutations: {
    ADD_PROJECT(state, load) {
      state.projects.push(load)
    }
  },
  actions: {
    ADD_PROJECT({commit}, load) {
      commit('ADD_PROJECT', load)
    }
  },
  getters: {
    GET_TEAM(state) {
      return state.team
    },
    GET_PROJECTS(state) {
      return state.projects
    }
  }
})