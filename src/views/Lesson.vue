<template>
  <div class="lesson-view-root">
    <h2 v-if="currentLesson"
        class="lesson-title">
      Урок "{{ currentLesson.title }}"
    </h2>
    <tabs-links :links="tabs"
                class="tabs-outer"/>
    <router-view/>
  </div>
</template>

<script>
import TabsLinks from '@/components/TabsLinks.vue';

export default {
  name: 'Lesson',
  computed: {
    currentLesson() {
      const { id } = this.$route.params;
      return this.$store.getters.getLesson(id);
    },
    tabs() {
      if (!this.currentLesson) return [];

      return [
        {
          path: `/lessons/${this.currentLesson.id}/tests`,
          label: 'Тесты',
        },
        {
          path: `/lessons/${this.currentLesson.id}/statistics`,
          label: 'Статистика',
        },
      ];
    },
  },
  components: {
    TabsLinks,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.lesson-view-root {
  .lesson-title {
    margin: 0;
  }

  .tabs-outer {
    margin: $gutter-m 0;
  }
}
</style>
