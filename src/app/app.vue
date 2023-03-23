<template>
  <h3>{{ appName }}</h3>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    // ...mapState(['name']),

    ...mapState({
      // 给 name 添加 appName 别名
      appName: 'name',
    }),
  },
};
</script>

<style>
@import './styles/app.css';
</style>
