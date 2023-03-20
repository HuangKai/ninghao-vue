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
};
</script>
