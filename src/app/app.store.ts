import { createStore } from 'vuex';

/**
 * 创建 Store
 */
const store = createStore({
    state: {
        name: '宁皓网',
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
});

/**
 * 导出 Store
 */
export default store;