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
       * 请求配置方式一
       */
      // const response = await axios.get('/posts', {
      //   baseURL: 'http://localhost:3000',
      // });

      /**
       * 请求配置方式二
       */
      const response = await axios({
        method: 'get',
        url: '/posts',
        baseURL: 'http://localhost:3000',
        headers: {
          'X-Custom': 'hello ~',
        },
      });
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
