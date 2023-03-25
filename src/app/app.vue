<template>
  <h3 @click="onClickName">{{ name }}</h3>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    // ...mapState(['name']),

    // ...mapState({
    //   // 给 name 添加 appName 别名
    //   appName: 'name',
    // }),

    // 使用 Getter 获取器
    ...mapGetters(['name']),
  },
  methods: {
    onClickName() {
      if (this.$store.state.name === '宁皓网') {
        this.$store.commit('setName', 'NINGHAO');
      } else {
        this.$store.commit('setName', '宁皓网');
      }
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
