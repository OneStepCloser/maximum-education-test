<template>
  <div class="app-header-root">
    <h1 class="logo">
      <img :src="require('@/assets/img/logo.svg')"
           class="logo-image">
      EduMax
    </h1>
    <span class="course-label">Курс:</span>
    <select v-if="!loading"
            v-model="selectedCourse">
      <option v-for="course in coursesList"
              :key="course.id"
              :value="course.id">
        {{ course.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['coursesList', 'currentCourse']),
    loading() {
      return !this.coursesList;
    },
    coursesMap() {
      if (!this.coursesList) return {};

      const res = {};
      this.coursesList.forEach((course) => {
        res[course.id] = course;
      });

      return res;
    },
    selectedCourse: {
      get() {
        return (this.currentCourse && this.currentCourse.id) || '';
      },
      set(val) {
        const course = this.coursesMap[val];
        this.$store.dispatch('updateCurrentCourse', course);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_colors.scss";
@import "@/assets/styles/_variables.scss";

.app-header-root {
  background-color: $theme-color;
  padding: $padding-m;
  display: flex;
  align-items: center;

  .logo {
    font-family: Raleway, sans-serif;
    margin: 0;
    color: white;
    display: flex;
    align-items: center;

    .logo-image {
      width: 1.5em;
      height: 1.5em;
      margin-right: 0.3em;
    }
  }

  .course-label {
    font-weight: bold;
    margin-left: auto;
    color: white;
    margin-right: 0.5em;
  }
}
</style>
