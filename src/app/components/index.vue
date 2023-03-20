<template>
  <div @click="onClickText">你好，欢迎访问宁皓网！</div>
</template>

<script>
export default {
  methods: {
    onClickText() {
      // 添加新的浏览历史，点击浏览器后退按钮退回上一页
      this.$router.push('/about');

      // 替换当前浏览历史，点击浏览器后退按钮会退到空白页
      // this.$router.replace('/about');
    },
  },
};
</script>
