import React, { useState, useEffect } from 'react';
import * as API from '../../services/api';
import Router from 'next/router';
import { connect } from 'react-redux';
import { deletePost, addPost } from '../../redux/posts/postsActions';

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
const WrapBtn = s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;
const DeleteBtn = s.button`

`;
const UpdateBtn = s.button`

`;

type PropsType = {
  deletePost: (id: number) => void;
  addPost: (id: number) => void;
};

const Posts: React.FC<PropsType> = ({ deletePost, addPost }) => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    API.getPosts()
      .then(response => {
        const posts = response.data;
        setPosts(posts);
        addPost(posts);
      })
      .catch(error => {
        console.log(error, 'no posts ');
      });
  }, []);

  const handlerDelete = (id: number) => {
    API.deletePost(id)
      .then(response => console.log('delete is ok', response))
      .catch(error => console.log('not delete', error));

    deletePost(id);
  };

  const handlerClick = (id: string) => {
    Router.push(`/posts/${id}`);
  };

  const redirectToUpdate = (id: any) => {
    Router.push(`/posts/update?id=${id}`);
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
              <UpdateBtn onClick={() => redirectToUpdate(el.id)}>
                Update
              </UpdateBtn>
              <DeleteBtn onClick={() => handlerDelete(el.id)}>Delete</DeleteBtn>
            </WrapBtn>
          </OnePost>
        ))}
      </Container>
    </>
  );
};

const mapDispatchToProps = {
  deletePost,
  addPost,
};
 //@ts-ignore
export default connect(null, mapDispatchToProps)(Posts);
