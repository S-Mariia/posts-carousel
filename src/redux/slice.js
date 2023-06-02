import { createSlice } from '@reduxjs/toolkit';
import { getPosts, createPost, getComments } from './operations';

const initialState = {
  posts: [],
  comments: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    removeComments: state => {
      state.comments = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.posts = payload;
        state.isLoading = false;
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(createPost.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.posts.unshift(payload);
        state.isLoading = false;
      })
      .addCase(createPost.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getComments.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getComments.fulfilled, (state, { payload }) => {
        state.comments = payload;
        state.isLoading = false;
      })
      .addCase(getComments.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { removeComments } = postsSlice.actions;

export default postsSlice.reducer;
