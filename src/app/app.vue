<template>
  <h3>{{ name }}</h3>
  <AppButton @init="onInitAppButton" @tap="onTapAppButton">
    提交
  </AppButton>
</template>

<script>
import AppButton from '../components/app-button.vue';
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },
  components: { AppButton },
  methods: {
    onInitAppButton() {
      console.log('on init app button');
    },
    onTapAppButton(text) {
      console.log('on tap app button', text);
    },
  },
};
</script>
