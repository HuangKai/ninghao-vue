<template>
  <h3>{{ name }}</h3>
  <div>{{ errorMessage }}</div>
  <div>{{ errorResponse.data }}</div>
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

  created() {
    axios
      .get('http://localhost:3000/posts1')
      .then(response => {
        console.log(response);
        this.posts = response.data;
      })
      .catch(error => {
        console.log(error.message);
        console.log(error.response);

        this.errorMessage = error.message;
        this.errorResponse = error.response;
      });
  },
};
</script>

<style>
@import './styles/app.css';
</style>
