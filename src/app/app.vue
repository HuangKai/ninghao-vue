<template>
  <h3>{{ name }}</h3>
  <div>{{ errorMessage }}</div>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }} -
    <small>{{ post.user.name }}</small>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '宁皓网',
      posts: [],
      errorMessage: '',
      errorResponse: '',
    };
  },

  async created() {
    try {
      /**
       * await 方式一
       */
      // const response = axios.get('http://localhost:3000/posts1');
      // this.posts = (await response).data;

      /**
       * await 方式二
       */
      const response = await axios.get('http://localhost:3000/posts');
      this.posts = response.data;
    } catch (error) {
      this.errorMessage = error.message;
    }
  },
};
</script>

<style>
@import './styles/app.css';
</style>
