export const Type = {
    GET_POSTS: 'get/GET_POSTS',
    ADD_POST: 'post/ADD_POST',
  };
  
  export const getPosts = () => ({
    type: Type.GET_POSTS,
  });
  
  export const addPost = () => ({
    type: Type.ADD_POST,
  });