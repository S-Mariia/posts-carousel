import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'shared/servises/api';

export const getPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      return await api.fetchPosts();
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (data, { rejectWithValue }) => {
    try {
      return await api.addPost(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getComments = createAsyncThunk(
  'comments/getComments',
  async (data, { rejectWithValue }) => {
    try {
      return await api.fetchComments(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
