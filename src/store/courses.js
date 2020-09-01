const coursesListApiUrl = 'https://5daca7380af117001417072a.mockapi.io/api/v1/courses';

const state = () => ({
  courses: null,
  currentCourse: null,
});

const getters = {
  coursesList: ({ courses }) => courses,
  currentCourse: ({ currentCourse }) => currentCourse,
};

const actions = {
  fetchCourses({ commit }) {
    return fetch(coursesListApiUrl)
      .then((resp) => resp.json()
        .then((data) => {
          commit('saveCourses', data);
          commit('saveCurrentCourse', data[0]);
        }));
  },
  updateCurrentCourse({ commit }, course) {
    commit('saveCurrentCourse', course);
  },
};

const mutations = {
  saveCourses(state, courses) {
    state.courses = courses;
  },
  saveCurrentCourse(state, course) {
    state.currentCourse = course;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
