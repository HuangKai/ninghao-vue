<template>
  <h3 @click="name = 'NINGHAO'">{{ name }}</h3>
  <div @click="username = 'WANGHAO'">{{ username }}</div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';

export default {
  setup() {
    const name = ref('宁皓网');

    const user = reactive({
      username: '王皓',
    });

    // /**
    //  * 解构反应数据
    //  */
    // const { username } = toRefs(user);

    // return {
    //   name,
    //   username,
    // };

    /**
     * 解构反应数据，使用展开操作符
     */
    return {
      name,
      ...toRefs(user),
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
