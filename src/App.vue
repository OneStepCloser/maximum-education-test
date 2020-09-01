<template>
  <div id="app">
    <default-layout>
      <router-view/>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  components: { DefaultLayout },
};
</script>
