const lessonsListApiUrl = 'https://5daca7380af117001417072a.mockapi.io/api/v1/lessons';

const state = () => ({
  lessons: null,
});

const getters = {
  currentLessons: ({ lessons }, { currentCourse }) => {
    if (!lessons || !currentCourse) {
      return null;
    }

    return lessons.filter((lesson) => lesson.courseId === currentCourse.id);
  },
  getLesson: ({ lessons }) => (id) => {
    const found = lessons && lessons.find((lesson) => lesson.id === id);
    return found || null;
  },
};

const actions = {
  fetchLessons({ commit }) {
    return fetch(lessonsListApiUrl)
      .then((resp) => resp.json()
        .then((data) => {
          commit('saveLessons', data);
        }));
  },
};

const mutations = {
  saveLessons(state, lessons) {
    state.lessons = lessons;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
