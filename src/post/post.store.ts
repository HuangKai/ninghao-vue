import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import {
  PostCreateStoreState,
  postCreateStoreModule,
} from './create/post-create.store';
import { postIndexStoreModule } from './index/post-index.store';
import { postShowStoreModule } from './show/post-show';

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
    show: postShowStoreModule,
  },
};
