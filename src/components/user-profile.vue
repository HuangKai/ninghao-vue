<template>
  <!-- <KeepAlive> -->
  <component :is="currentComponent"></component>
  <!-- </KeepAlive> -->
  <small @click="onClickHintText">{{ hintText }}</small>
</template>

<script>
import UserLogin from './user-login';
import UserRegister from './user-register';
import '../app/styles/app.css';

export default {
  data() {
    return {
      currentComponent: 'UserLogin',
      hintText: '没没有账户，点击注册',
    };
  },
  methods: {
    onClickHintText() {
      switch (this.currentComponent) {
        case 'UserRegister':
          this.currentComponent = 'UserLogin';
          this.hintText = '还没有账户，点击注册';
          break;
        case 'UserLogin':
          this.currentComponent = 'UserRegister';
          this.hintText = '已有账户，点击登录';
          break;

        default:
          break;
      }
    },
  },
  components: {
    UserLogin,
    UserRegister,
  },
};
</script>
