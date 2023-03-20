<template>
  <div>用户登录 {{ username }}</div>
  <AppInput v-model="username"></AppInput>
  <!-- <AppInput
    :model-value="username"
    @update:model-value="username = $event"
  ></AppInput> -->
</template>

<script>
import AppInput from './app-input.vue';
export default {
  data() {
    return {
      username: '',
    };
  },
  components: {
    AppInput,
  },

  // 组件被创建之前的方法
  beforeCreate() {
    console.log('user login before create');
  },

  // 组件被创建时
  created() {
    console.log('user login created');
  },

  // 组件被挂载之前的方法
  beforeMount() {
    console.log('user login before mount');
  },

  // 组件被挂载时
  mounted() {
    console.log('user login mounted');
  },

  // 组件被更新之前的方法
  beforeUpdate() {
    console.log('user login before update');
  },

  // 组件被更新时
  updated() {
    console.log('user login updated');
  },

  // 组件被卸载之前的方法
  beforeUnmount() {
    console.log('user login before unmount');
  },

  // 组件被卸载时
  unmounted() {
    console.log('user login unmounted');
  },
};
</script>
