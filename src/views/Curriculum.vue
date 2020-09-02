<template>
  <div class="curriculum-root">
    <font-awesome-icon v-if="loading"
                       icon="spinner"
                       class="spinner"/>
    <template v-else>
      <h2 class="course-title">{{ currentCourse.name }}</h2>
      <lessons-table :lessons="currentLessonsPaginated"
                     class="lessons-table-outer"/>
      <pagination :total="currentLessons.length"
                  :perPage="perPage"
                  v-model="page"
                  class="pagination-outer"/>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LessonsTable from '@/components/LessonsTable.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Curriculum',
  data() {
    return {
      page: 1,
      perPage: 5,
    };
  },
  computed: {
    ...mapGetters([
      'coursesList',
      'currentLessons',
      'currentCourse',
    ]),
    loading() {
      return this.currentLessons === null;
    },
    currentLessonsPaginated() {
      return this.$store.getters.currentLessonsPaginated(this.page, this.perPage);
    },
  },
  watch: {
    currentCourse(to, from) {
      if (from) this.page = 1;
    },
  },
  components: { Pagination, LessonsTable },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_colors.scss";

@keyframes spinner-rotate {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}

.curriculum-root {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .spinner {
    margin: auto 0;
    color: $theme-color;
    width: 2em;
    height: 2em;
    animation: spinner-rotate 1s ease-in-out infinite;
    display: inline-block;
  }

  .course-title {
    margin: 0;
  }

  .lessons-table-outer {
    margin-top: 1.5em;
    width: 100%;
  }

  .pagination-outer {
    margin-top: 1em;
    align-self: stretch;
  }
}
</style>
