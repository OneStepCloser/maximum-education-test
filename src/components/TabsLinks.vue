<template>
  <div class="tabs-links-root">
    <router-link v-for="link in links"
                 :key="link.path"
                 :to="link.path"
                 class="link"
                 exact-active-class="active">
      {{ link.label }}
    </router-link>
  </div>
</template>

<script>
const isLink = (obj) => {
  const requiredFields = ['path', 'label'];

  return requiredFields.every((field) => field in obj);
};
export default {
  name: 'TabsLinks',
  props: {
    links: {
      validator(val) {
        if (!Array.isArray(val)) return false;

        return val.every(isLink);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_colors.scss";

.tabs-links-root {
  display: flex;

  .link {
    padding: 0.5em 2em;
    position: relative;
    cursor: pointer;
    transition: color 0.3s;
    text-decoration: none;

    &::after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: $gray-100;
      transition: background-color 0.3s;
    }

    &.active {
      color: $theme-color;

      &::after {
        height: 2px;
        background-color: $theme-color;
      }
    }
  }
}
</style>
