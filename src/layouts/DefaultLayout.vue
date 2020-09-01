<template>
  <div class="default-layout-root">
    <app-header/>
    <div class="main-container">
      <sidebar class="sidebar-outer"/>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue';
import Sidebar from '@/components/layout/Sidebar.vue';

export default {
  name: 'DefaultLayout',
  components: { Sidebar, AppHeader },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_colors.scss";

.default-layout-root {
  display: flex;
  flex-direction: column;

  .main-container {
    display: flex;
    background-color: $gray-100;
    flex-grow: 1;

    .sidebar-outer {
      flex-shrink: 0;
    }
  }
}
</style>
