import { Module } from 'vuex';
import { PostItem } from '../post.store';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface PostIndexStoreState {
  loading: boolean;
  posts: Array<PostItem>;
}

// 来自 ChatGPT
// interface ErrorResponse {
//   response?: {
//     status: number;
//     data: never; // You can replace 'any' with the appropriate type for error data
//   };
// }

export const postIndexStoreModule: Module<PostIndexStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
    posts: [],
  } as PostIndexStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },

    posts(state) {
      return state.posts;
    },
  },

  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setPosts(state, data) {
      state.posts = data;
    },
  },

  actions: {
    async getPosts({ commit }) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get('/posts');
        commit('setPosts', response.data);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);

        // 来自 ChatGPT
        // const typedError = error as ErrorResponse;
        // throw typedError.response ? typedError.response : typedError;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const _error = error as any;

        if (_error.response) {
          throw _error.response;
        }
      }
    },
  },
};
