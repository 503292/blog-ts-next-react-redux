import React, { useState, useEffect } from 'react';
import * as API from '../../services/api';

import s from 'styled-components';

const Container = s.ul`
  color: lightgrey;
  padding: 0;
`;

const OnePost = s.li`
  color: #363643;
  border: 2px solid lightgrey;
  border-radius: 10px;
  list-style-type: none;
  margin-bottom: 10px;
  padding: 10px;
`;

type PostsType = {
  id: number | null;
  title: string | null;
  body: string | null;
};

const Posts = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    API.getPosts()
      .then(response => {
        const posts: Array<PostsType> = response.data as Array<PostsType>;
        setPosts(posts);
      })
      .catch(error => {
        console.log(error, 'no posts ');
      });
  }, []);

  return (
    <>
      <Container>
        {posts.map(el => (
          <OnePost key={el.id}>
            <h4>{el.title}</h4>
            <p>{el.body}</p>
          </OnePost>
        ))}
      </Container>
    </>
  );
};

export default Posts;
