<template>
  <div class="app-header-root">
    <h1 class="logo">
      <img :src="require('@/assets/img/logo.svg')"
           class="logo-image">
      EduMax
    </h1>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_colors.scss";
@import "@/assets/styles/_variables.scss";

.app-header-root {
  background-color: $theme-color;
  padding: $padding-m;

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
}
</style>
