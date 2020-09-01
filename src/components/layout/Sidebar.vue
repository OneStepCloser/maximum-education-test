<template>
  <div class="sidebar-root">
    <router-link v-for="link in links"
                 :key="link.path"
                 :to="link.path"
                 class="link"
                 exact-active-class="active">
      <font-awesome-icon :icon="link.icon"
                         class="link-icon"/>
      <div class="link-label">{{ link.label }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      links: [
        {
          label: 'Главная',
          icon: 'home',
          path: '/',
        },
        {
          label: 'Расписание',
          icon: 'th-list',
          path: '/curriculum',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_colors.scss";
@import "@/assets/styles/_variables.scss";

.sidebar-root {
  background-color: white;

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    padding: $padding-m;
    transition: color 0.3s, background-color 0.3s;

    &:not(:first-of-type) {
      margin-top: $gutter-m;
    }

    &.active {
      background-color: rgba($theme-color, 0.1);
      color: $theme-color;
    }

    .link-icon {
      width: 2em;
      height: 2em;
    }

    .link-label {
      font-size: 0.9em;
      margin-top: 0.5em;
    }
  }
}
</style>
