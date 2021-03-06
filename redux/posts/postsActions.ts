export const Type = {
  GET_POSTS: 'get/GET_POSTS',
  ADD_POST: 'post/ADD_POST',
  UPDATE_POST: 'put/UPDATE_POST',
  DELETE_POST: 'delete/DELETE_POST',
};

type PostsType = {
  id: number;
  title: string;
  body: string;
};

// crud
export const getPosts = () => ({
  type: Type.GET_POSTS,
});

export const addPost = (data: Array<PostsType>) => ({
  type: Type.ADD_POST,
  payload: data,
});
export const updatePost = (id: number, data: Array<PostsType>) => ({
  type: Type.UPDATE_POST,
  payload: { data, id },
});
export const deletePost = (id: number) => ({
  type: Type.DELETE_POST,
  payload: id,
});
