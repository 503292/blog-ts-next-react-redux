import React, { useEffect, useState } from 'react';
import s from 'styled-components';
import * as API from '../../services/api';

const Container = s.div`{
border: 1px solid grey;

p {
    color: red;
}
}`;

const OnePost = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const pathQuery = window.location.pathname;

    API.getOnePost(pathQuery)
      .then(response => {
        // console.log(response.data, 'data');
        setPost(response.data);
      })
      .catch(error => {
        console.log(error, 'no posts ');
      });
  }, []);

  console.log(post);

  return (
    <Container>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </Container>
  );
};

export default OnePost;
