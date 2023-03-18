<template>
  <h3>{{ name }}</h3>
  <AppButton
    text="确定"
    @init="onInitAppButton"
    @tap="onTapAppButton"
  ></AppButton>
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
