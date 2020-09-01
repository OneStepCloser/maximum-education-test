<template>
  <div class="default-layout-root">
    <app-header/>
    <div class="main-container">
      <sidebar class="sidebar-outer"/>
      <div class="content-credits-container">
        <div class="content-wrapper">
          <slot></slot>
        </div>
        <div class="credits">
          Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
      </div>
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
@import "@/assets/styles/_variables.scss";

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

    .content-credits-container {
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      .content-wrapper {
        flex-grow: 1;
        background-color: white;
        margin: $gutter-m $gutter-m 0 $gutter-m;
        padding: $padding-l;
        box-shadow: 0 0 16px rgba(#000, 0.1);
      }

      .credits {
        color: $gray-500;
        font-size: 0.8em;
        line-height: 1.5em;
        margin-right: $gutter-m;
        margin-left: $gutter-m;
        text-align: right;
      }
    }
  }
}
</style>
