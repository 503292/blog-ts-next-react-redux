import React, { useState, useEffect } from 'react';
import * as API from '../../services/api';

type PostsType = {
  id: number | null;
  title: string | null;
  body: string | null;
};

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.getPosts()
      .then(response => {
        const posts: Array<PostsType> = response.data as Array<PostsType>;
        // console.log(posts, 'posts');
        setPosts(posts);
      })
      .catch(error => {
        console.log(error, 'no posts ');
      });
  }, []);

  return (
    <>
      Posts
      <ul>
        {posts.map(el => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{el.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
