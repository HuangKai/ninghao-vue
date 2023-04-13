<template>
  <h3>{{ name }}</h3>
  <input type="text" v-model="title" @keyup.enter="createPost" />
  <div>{{ errorMessage }}</div>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }} -
    <small>{{ post.user.name }}</small>
  </div>
</template>

<script>
import { apiHttpClient } from '@/app/app.service';

export default {
  data() {
    return {
      name: '宁皓网',
      posts: [],
      errorMessage: '',
      errorResponse: '',
      user: {
        name: '王皓',
        password: '123123',
      },
      token: '',
      title: '',
    };
  },

  async created() {
    this.getPost();

    // 用户登录
    try {
      const response = await apiHttpClient.post('/login', this.user);
      this.token = response.data.token;

      console.log(response.data);
    } catch (error) {
      this.errorMessage = error.message;
    }
  },

  methods: {
    async getPost() {
      // 获取内容列表
      try {
        const response = await apiHttpClient.get('/posts');

        this.posts = response.data;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

    // 创建内容
    async createPost() {
      try {
        const response = await apiHttpClient.post(
          '/posts',
          {
            title: this.title,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        );

        console.log(response.data);

        this.title = '';

        this.getPost();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
