<template>
  <h3>{{ name }}</h3>
  <AppButton @init="onInitAppButton" @tap="onTapAppButton">
    提交
  </AppButton>
  <AppDemoButton>
    <template #icon>
      <span>🔍</span>
    </template>
    <template #text>
      搜索
    </template>
  </AppDemoButton>
</template>
<script>
import AppButton from '../components/app-button.vue';
import AppDemoButton from '../components/app-demo-button.vue';
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },
  components: { AppButton, AppDemoButton },
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
