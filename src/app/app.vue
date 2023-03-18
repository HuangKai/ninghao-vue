<template>
  <h3>{{ name }}</h3>
  <UserProfile></UserProfile>
</template>
<script>
import UserProfile from '../components/user-profile.vue';
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },
  components: { UserProfile },
};
</script>
