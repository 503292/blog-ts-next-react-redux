export const Type = {
  GET_POSTS: 'get/GET_POSTS',
  ADD_POST: 'post/ADD_POST',
  UPDATE_POST: 'put/UPDATE_POST',
  DELETE_POST: 'delete/DELETE_POST',
};

// crud
export const getPosts = () => ({
  type: Type.GET_POSTS,
});

export const addPost = (data: any) => ({
  type: Type.ADD_POST,
  payload:  data ,
});
export const updatePost = (data: Array<string>) => ({
  type: Type.UPDATE_POST,
  payload:  data ,
});
export const deletePost = (id: string) => ({
  type: Type.DELETE_POST,
  payload:  id ,
});
