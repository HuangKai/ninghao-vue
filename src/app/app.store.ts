import { createStore } from 'vuex';

/**
 * 创建 Store
 */
const store = createStore({
    state: {
        name: '',
    },
    getters: {
        name(state) {
            return `🎈 ${state.name}`;
        },
    },

    //修改 state 的数据
    mutations: {
        setName(state, data) {
            state.name = data;
        },
    },

    // 定义 action
    actions: {
        /**
         * 常规调用方式
         */
        // getName(context) {
        //     const name = '宁皓网';
        //     context.commit('setName', name);
        //     // 打印 context 对象
        //     console.log(context);
        // },

        /**
         * 结构参数调用方式
         */
        getName({ commit }) {
            const name = '宁皓网';
            commit('setName', name);
        },
    },
});

/**
 * 导出 Store
 */
export default store;