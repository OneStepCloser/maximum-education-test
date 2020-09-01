import Vue from 'vue';
import Vuex from 'vuex';
import coursesModule from './courses';
import lessonsModule from './lessons';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    initState({ dispatch }) {
      dispatch('fetchCourses');
      dispatch('fetchLessons');
    },
  },
  modules: {
    coursesModule,
    lessonsModule,
  },
});
