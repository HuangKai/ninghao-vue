import { createStore } from 'vuex';

/**
 * 创建 Store
 */
const store = createStore({
    state: {
        name: '',
        loading: false,
    },
    getters: {
        name(state) {
            return `🎈 ${state.name}`;
        },
    },

    //修改 state 的数据，仅限于同步操作
    mutations: {
        setName(state, data) {
            state.name = data;
        },
        setLoading(state, data) {
            state.loading = data;
        },
    },

    // 定义 action，通常用于异步操作
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
            commit('setLoading', true);

            setTimeout(() => {
                const name = '宁皓网';
                commit('setName', name);
                commit('setLoading', false);
            }, 2000);
        },
    },
});

/**
 * 导出 Store
 */
export default store;