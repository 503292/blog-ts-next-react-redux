import React from 'react';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

const PostsPage = () => {
  return (
    <Provider store={store}>
      <AddPostForm />
    </Provider>
  );
};

export default PostsPage;
