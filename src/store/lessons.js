const lessonsListApiUrl = 'https://5daca7380af117001417072a.mockapi.io/api/v1/lessons';

const state = () => ({
  lessons: null,
});

const getters = {
  lessonsList: ({ lessons }) => lessons,
};

const actions = {
  fetchLessons() {
    return fetch(lessonsListApiUrl)
      .then((resp) => {
        console.log(resp.json());
      });
  },
};

export default {
  state,
  getters,
  actions,
};
