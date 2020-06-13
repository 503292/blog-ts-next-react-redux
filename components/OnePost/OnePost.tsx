import React, { useEffect, useState } from 'react';
import s from 'styled-components';
import * as API from '../../services/api';

const Container = s.div`{
border: 2px solid lightgrey;
border-radius: 10px;
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
  // const [post, setPost] = useState<Array<number | string>>([]);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [comments, setComments] = useState<Array<string>>([]);

  useEffect(() => {
    const pathQuery = window.location.pathname;

    API.getOnePost(pathQuery)
      .then(response => {
        // setPost(response.data);
        setTitle(response.data.title);
        setBody(response.data.body);

        const tmpArr: Array<string> = response.data.comments;
        if (!!tmpArr) {
          setComments(tmpArr);
        }
      })
      .catch(error => {
        console.log(error, 'no posts ');
      });
  }, []);

  return (
    <>
      <Container>
        <WrapOnePost>
          <h4>{title}</h4>
          <p>{body}</p>
          <CommentsCount>
            Coments: {!!comments?.length ? comments.length : 0}
          </CommentsCount>
        </WrapOnePost>
        {!!comments?.length && (
          <WrapComments>
            <>dfff</>
          </WrapComments>
        )}
      </Container>
    </>
  );
};

export default OnePost;
