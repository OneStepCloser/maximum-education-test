<template>
  <div class="lesson-view-root">
    <h2 v-if="currentLesson"
        class="lesson-title">
      Урок "{{ currentLesson.title }}"
    </h2>
    <tabs v-model="currentTab"
          :options="tabsPrimitive"
          class="tabs-outer">
      <template v-slot="{ option }">
        {{ tabsMap[option].label }}
      </template>
    </tabs>
    <component :is="tabContentComponent"/>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue';

const Tab = {
  TESTS: 'tests',
  STATICTICS: 'statistics',
};

export default {
  name: 'Lesson',
  data() {
    const tabs = [
      {
        id: Tab.TESTS,
        label: 'Тесты',
      },
      {
        id: Tab.STATICTICS,
        label: 'Статистика',
      },
    ];

    return {
      currentTab: tabs[0].id,
      tabs,
    };
  },
  computed: {
    tabsPrimitive() {
      return this.tabs.map((tab) => tab.id);
    },
    tabsMap() {
      const res = {};

      this.tabs.forEach((tab) => {
        res[tab.id] = tab;
      });

      return res;
    },
    tabContentComponent() {
      const componentsMap = {
        [Tab.STATICTICS]: 'statictics',
        [Tab.TESTS]: 'tests',
      };

      return componentsMap[this.currentTab];
    },
    currentLesson() {
      const { id } = this.$route.params;
      return this.$store.getters.getLesson(id);
    },
  },
  components: {
    Tabs,
    statictics: () => import('@/components/Statistics'),
    tests: () => import('@/components/Tests'),
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
