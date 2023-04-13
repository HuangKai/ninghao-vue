<template>
  <h3>{{ name }}</h3>

  <UserLogin
    v-if="!isLoggedIn"
    @login-success="onLoginSuccess"
    @login-error="onLoginError"
  ></UserLogin>

  <input
    v-if="isLoggedIn"
    type="text"
    v-model="title"
    @keyup.enter="createPost"
    placeholder="请输入内容标题"
  />
  <div>{{ errorMessage }}</div>
  <div v-for="post in posts" :key="post.id">
    <input
      type="text"
      :value="post.title"
      @keyup.enter="updatePost($event, post.id)"
    />
    <button @click="deletePost(post.id)">删除</button>
    {{ post.title }} -
    <small>{{ post.user.name }}</small>
  </div>
</template>

<script>
import { apiHttpClient } from '@/app/app.service';
import UserLogin from '@/user/components/user-login.vue';

export default {
  components: {
    UserLogin,
  },

  data() {
    return {
      name: '宁皓网',
      posts: [],
      errorMessage: '',
      errorResponse: '',
      token: '',
      title: '',
    };
  },

  computed: {
    isLoggedIn() {
      return this.token ? true : false;
    },
  },

  async created() {
    this.getPost();
  },

  methods: {
    onLoginSuccess(data) {
      this.token = data.token;
    },

    onLoginError(error) {
      this.errorMessage = error.data.message;
    },

    async deletePost(postId) {
      try {
        await apiHttpClient.delete(`/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });

        this.getPost();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
    async updatePost(event, postId) {
      console.log(event.target.value);
      console.log(postId);

      try {
        await apiHttpClient.patch(
          `/posts/${postId}`,
          {
            title: event.target.value,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        );

        this.getPost();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
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
