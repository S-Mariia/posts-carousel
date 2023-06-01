import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63ff39c9c5c800a7238e828b.mockapi.io',
});

const commentsInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchPosts = async () => {
  const { data } = await commentsInstance.get('/posts');
  return data.reverse().slice(0, 20);
};

export const addPost = async data => {
  const { data: result } = await instance.post('/posts', data);
  return result;
};

export const fetchComments = async id => {
  const { data: result } = await commentsInstance.get(`/posts/${id}/comments`);
  return result;
};
