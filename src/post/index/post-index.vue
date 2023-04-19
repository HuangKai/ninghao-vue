<template>
  <PostList></PostList>
</template>

<script>
import { defineComponent } from 'vue';
import PostList from './components/post-list.vue';

export default defineComponent({
  components: {
    PostList,
  },

  mounted() {
    // 获取全部命名空间的路径
    console.log('Namespaced module paths:', this.$store._modulesNamespaceMap);
  },
});
</script>
