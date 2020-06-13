import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const getPosts = () => axios.get('/posts');
export const setPost = (post: any) => axios.post('/posts', post);
export const getOnePost = (query: string) => axios.get(query);
