<template>
  <h3>
    <router-link :to="{ name: 'postShow', params: { postId: item.id } }">
      {{ item.title }} - <small>{{ item.user.name }}</small>
    </router-link>
  </h3>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    item: Object,
  },
  mounted() {
    console.log('link to: ', {
      name: 'postShow',
      params: { postId: this.item.id },
    });
  },
});
</script>
