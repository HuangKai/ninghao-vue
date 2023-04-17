import { Module } from 'vuex';
import {
  PostCreateStoreState,
  postCreateStoreModule,
} from './create/post-create.store';
import { RootState } from '@/app/app.store';

export interface PostStoreState {
  create: PostCreateStoreState;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true,

  modules: {
    create: postCreateStoreModule,
  },
};
