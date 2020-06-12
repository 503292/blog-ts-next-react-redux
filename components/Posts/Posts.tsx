import React, { useState, useEffect } from 'react';
import * as API from '../../services/api';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.getPosts()
      .then(response => {
        const posts = response.data;
        console.log(posts, 'posts');
        setPosts(posts);
      })
      .catch(error => {
        console.log(error, 'no posts ');
      });
  }, []);

  return (
    <>
      Posts
      {posts.map(el => {
        return <p>{el.title}</p>;
      })}
    </>
  );
};

export default Posts;
