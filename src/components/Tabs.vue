<template>
  <div class="tabs-root">
    <label class="wrapper"
           v-for="opt in options"
           :key="opt">
      <input type="radio"
             :value="opt"
             v-model="chosenMediator"
             class="input">
      <div class="content-container">
        <slot :option="opt"></slot>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  model: {
    event: 'change',
    prop: 'chosen',
  },
  props: {
    options: {
      validator(val) {
        return Array.isArray(val)
            && val.every((el) => typeof el === 'string' || typeof el === 'number');
      },
    },
    chosen: {
      validator(val) {
        return val === null || typeof val === 'string' || typeof val === 'number';
      },
    },
  },
  computed: {
    chosenMediator: {
      get() {
        return this.chosen;
      },
      set(val) {
        this.$emit('change', val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_colors.scss";

.tabs-root {
  display: flex;

  .wrapper {
    .input {
      opacity: 0;
      position: absolute;
      width: 0;
      height: 0;

      &:checked + .content-container {
        color: $theme-color;

        &::after {
          height: 2px;
          background-color: $theme-color;
        }
      }
    }

    .content-container {
      padding: 0.5em 2em;
      position: relative;
      cursor: pointer;

      &::after {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: $gray-100;
      }
    }
  }
}
</style>
