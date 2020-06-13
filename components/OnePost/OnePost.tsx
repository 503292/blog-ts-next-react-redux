import React, { useEffect, useState } from 'react';
import s from 'styled-components';
import * as API from '../../services/api';

const Container = s.div`{
border: 1px solid grey;
padding: 10px;
color: grey;
}`;
const WrapOnePost = s.div`{

}`;
const WrapComments = s.div`{

}`;
const CommentsCount = s.p`{
    margin: 0;
    text-align: end;

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

  type TypePost = {
    title: string;
    body: string;
    comments?: Array<string>;
  };

  return (
    <>
      <Container>
        <WrapOnePost>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <CommentsCount>
            Coments: {!!post?.comments?.length ? post.comments.length : 0}
          </CommentsCount>
        </WrapOnePost>

        {!!post?.comments?.length && (
          <WrapComments>
            <>dfff</>
          </WrapComments>
        )}
      </Container>
    </>
  );
};

export default OnePost;
