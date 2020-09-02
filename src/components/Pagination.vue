<template>
<div class="pagination-root">
  <div class="current-page">
    Страница: {{ current }} из {{ totalPages }}
  </div>
  <button v-if="current > 1"
          class="button-clear button-accent prev-button"
          @click="$emit('change', current - 1)">
    <font-awesome-icon icon="arrow-left"
                       class="arrow-icon"/>
    страница {{ current - 1 }}
  </button>
  <button v-if="current < totalPages"
          class="button-clear button-accent next-button"
          @click="$emit('change', current + 1)">
    страница {{ current + 1 }}
    <font-awesome-icon icon="arrow-right"
                       class="arrow-icon"/>
  </button>
</div>
</template>

<script>
export default {
  name: 'Pagination',
  model: {
    prop: 'current',
    event: 'change',
  },
  props: {
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_colors.scss";

.pagination-root {
  display: flex;

  .current-page {
    color: $gray-500;
    margin-right: auto;
  }

  .prev-button {
    .arrow-icon {
      margin-right: 0.5em;
    }
  }

  .next-button {
    margin-left: 1em;

    .arrow-icon {
      margin-left: 0.5em;
    }
  }
}
</style>
