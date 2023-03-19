<template>
  <div>注册用户</div>
  <input type="text" ref="username" />
  <input type="text" />
</template>

<script>
export default {
  mounted() {
    console.log(this.$refs.username);
    this.$refs.username.focus();
  },
};
</script>
