import { ComponentOptions, ComponentPublicInstance } from 'vue';
import { APP_NAME } from './app/app.config';

/**
 * 设置页面标题
 */
export const setTitle = (vm: ComponentPublicInstance) => {
  // 获取组件里的 title 选项
  const { title } = vm.$options;

  if (title) {
    let titleContent;

    if (typeof title === 'function') {
      // 执行 title
      titleContent = title.call(vm);
    } else {
      titleContent = title;
    }

    document.title = `${titleContent} - ${APP_NAME}`;
  }

  if (vm.$route.path === '/') {
    document.title = APP_NAME;
  }
};

/**
 * 标题混合
 */
export const titleMixin: ComponentOptions = {
  created() {
    setTitle(this);
  },

  update() {
    setTitle(this);
  },
};

// ChatGPT
// import {
//   ComponentOptions,
//   ComponentPublicInstance,
//   onBeforeMount,
//   onUpdated,
// } from 'vue';
// import { APP_NAME } from './app/app.config';

// /**
//  * 设置页面标题
//  */
// export const setTitle = (vm: ComponentPublicInstance) => {
//   // 获取组件里的 title 选项
//   const { title } = vm.$options;

//   if (title) {
//     let titleContent;

//     if (typeof title === 'function') {
//       // 执行 title
//       titleContent = title.call(vm);
//     } else {
//       titleContent = title;
//     }

//     document.title = `${titleContent} - ${APP_NAME}`;
//   }

//   if (vm.$route.path === '/') {
//     document.title = APP_NAME;
//   }
// };

// /**
//  * 标题混合
//  */
// export const titleMixin: ComponentOptions = {
//   setup() {
//     onBeforeMount(function () {
//       setTitle(this);
//     });

//     onUpdated(function () {
//       setTitle(this);
//     });
//   },
// };
