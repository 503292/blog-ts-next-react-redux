import React, { useState, useEffect } from 'react';
import * as API from '../../services/api';
import Router from 'next/router';

import s from 'styled-components';

const Container = s.ul`
  color: lightgrey;
  padding: 0;
`;

const OnePost = s.li`
  display: flex;
  color: #363643;
  border: 2px solid lightgrey;
  border-radius: 10px;
  list-style-type: none;
  margin-bottom: 10px;
  padding: 10px;
`;

const WrapPost = s.div`
  width: 90%;
`;
const OnePostLink = s.a`{
  cursor: pointer;

}`;
const WrapBtn = s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;
const DeleteBtn = s.button`

`;
const UpdateBtn = s.button`

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

  const handlerDelete = (id: string) => {
    console.log(id, 'id');
    API.deletePost(id)
      .then(response => console.log('delete is ok'))
      .catch(error => console.log('not delete'));
  };

  const handlerClick = (id: string) => {
    Router.push(`/posts/${id}`);
  };

  return (
    <>
      <Container>
        {posts.map(el => (
          <OnePost key={el.id}>
            <WrapPost onClick={() => handlerClick(el.id)}>
              <h4>{el.title}</h4>
              <p>{el.body}</p>
            </WrapPost>
            <WrapBtn>
              <UpdateBtn>Update</UpdateBtn>
              <DeleteBtn onClick={() => handlerDelete(el.id)}>Delete</DeleteBtn>
            </WrapBtn>
          </OnePost>
        ))}
      </Container>
    </>
  );
};

export default Posts;
