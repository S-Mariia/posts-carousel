import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

export const fetchPosts = async () => {
  const { data } = await instance.get('/');
  return data.reverse().slice(0, 20);
};

export const addPost = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const fetchComments = async id => {
  const { data: result } = await instance.get(`/${id}/comments`);
  return result;
};
