import { Module } from 'vuex';
import {
  PostCreateStoreState,
  postCreateStoreModule,
} from './create/post-create.store';
import { RootState } from '@/app/app.store';
import { postIndexStoreModule } from './index/post-index.store';

export interface PostItem {
  id: string;
  title: string;
  content: string;
}

export interface PostStoreState {
  create: PostCreateStoreState;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true,

  modules: {
    create: postCreateStoreModule,
    index: postIndexStoreModule,
  },
};
