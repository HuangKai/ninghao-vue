<template>
  <div v-if="loading">加载中...</div>
  <PostListItem
    v-for="post in posts"
    :item="post"
    :key="post.id"
  ></PostListItem>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import PostListItem from './post-list-item.vue';
export default defineComponent({
  // data() {
  //   return {
  //     posts: [],
  //   };
  // },

  async created() {
    // const response = await apiHttpClient.get('/posts');
    // this.posts = response.data;
    this.getPosts();
  },

  computed: {
    ...mapGetters({
      loading: 'post/index/loading',
      posts: 'post/index/posts',
    }),
  },

  methods: {
    ...mapActions({
      getPosts: 'post/index/getPosts',
    }),
  },

  mounted() {
    // 获取全部命名空间的路径
    console.log('Namespaced module paths:', this.$store._modulesNamespaceMap);
  },

  components: {
    PostListItem,
  },
});
</script>
