<template>
  <h3>{{ name }}</h3>
  <input type="text" @keyup.enter="keyUpInput" />
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },
  methods: {
    keyUpInput(event) {
      console.log('回车');
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
