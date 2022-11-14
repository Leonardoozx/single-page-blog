import axios from 'axios';

const formatedDate = new Date().toLocaleTimeString().split(',').join(' ');

const api = axios.create({
  baseURL: `https://single-page-blog-backend.up.railway.app/comments`,
});

export const postComment = async (user, content) => {
  await api.post('/', {
    user,
    content,
    date: formatedDate,
  });
};

export const deleteComment = (id) => api.delete(`/${id}`);

export const updateComment = (id, {content, user}) => api.put(`/${id}`, { user, content });
// async function bellow
export const getAllComents = () => api.get();
