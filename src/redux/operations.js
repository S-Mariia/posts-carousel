import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'shared/servises/api';

import { toast } from 'react-hot-toast';

export const getPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      return await api.fetchPosts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addPost(data);
      toast('The post was successfully created', {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: 'darkgreen',
          color: '#fff',
        },
      });

      return result;
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
