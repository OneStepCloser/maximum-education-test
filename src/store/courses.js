const coursesListApiUrl = 'https://5daca7380af117001417072a.mockapi.io/api/v1/courses';

const state = () => ({
  courses: null,
});

const getters = {
  coursesList: ({ courses }) => courses,
};

const actions = {
  fetchCourses() {
    return fetch(coursesListApiUrl)
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
