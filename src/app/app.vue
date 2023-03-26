<template>
  <h3 @click="onClickName">{{ name }}</h3>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  created() {
    /**
     * 使用 dispatch 方法调用
     */
    // this.$store.dispatch('getName');

    /**
     * 使用 mapActions 导入的 getName 方法
     */
    this.getName();
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
    /**
     * 使用数组参数，设置方法用数组参数，修改数组名称用对象参数
     */
    ...mapMutations(['setName']),

    /**
     * 使用对象参数
     */
    ...mapActions({
      getName: 'getName',
    }),
    onClickName() {
      if (this.$store.state.name === '宁皓网') {
        // this.$store.commit('setName', 'NINGHAO');
        this.setName('NINGHAO');
      } else {
        // this.$store.commit('setName', '宁皓网');
        this.setName('宁皓网');
      }
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
