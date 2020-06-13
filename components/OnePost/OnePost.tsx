import React, { useEffect, useState } from 'react';
import GoHome from '../GoHome/GoHome';
import s from 'styled-components';
import * as API from '../../services/api';

const Container = s.div`{
  color: grey;
}`;
const WrapOnePost = s.div`{
  border: 2px solid lightgrey;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
}`;
const WrapComments = s.div`{
  margin-bottom: 5px;
}`;
const CommentsCount = s.p`{
    margin: 0;
    text-align: end;

}`;
const InputComment = s.input`{
    margin: 0;
    text-align: start;
    margin-bottom: 10px;
}`;
const Form = s.form`{
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5px 0;
}`;

const Button = s.button`{
  width: 50%;
  margin: 0 auto;
  height: 40px;
  background-color: #7cc8ee;
  border: 2px solid grey;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
      color: white;
      background-color: #67a4c3;
  }
  &:active {
      background-color: #7cc8ee;
  }`;
const Comment = s.p`{
    margin: 0;
    padding: 5px;
    border: 2px solid grey;
    border-radius: 10px;
    margin-bottom: 5px;
  }`;

const OnePost = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [id, setId] = useState<number>(0);
  const [comments, setComments] = useState<Array<string>>([]);
  const [comment, setComment] = useState<string>('');

  useEffect(() => {
    const pathQuery = window.location.pathname;

    API.getOnePost(pathQuery)
      .then(response => {
        setTitle(response.data.title);
        setBody(response.data.body);
        setId(response.data.id);

        const tmpArr: Array<string> = response.data.comments;
        if (!!tmpArr) {
          setComments(tmpArr);
        }
      })
      .catch(error => {
        console.log(error, 'no posts ');
      });
  }, [id]);

  const handlerChangeComments = (e: any) => {
    setComment(e.target.value);
  };
  const handlerSubmit =  (e: any) => {
    e.preventDefault();

    const newComment: Array<any> = {
      //@ts-ignore
      postId: id,
      title: comment,
    };

     API.setComment(newComment)
      .then(response => {
        console.log('comment add`s ', response.data);
        setComments(prev => [...prev, response.data]);
      })
      .catch(error => {
        console.log(error, 'no comment ');
      });

    setComment('');
  };

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
            {comments.map((el: any) => (
              <Comment key={el.id}>{el.title}</Comment>
            ))}
          </WrapComments>
        )}
        <Form onSubmit={handlerSubmit}>
          <InputComment
            onChange={handlerChangeComments}
            type="text"
            name="comment"
            value={comment}
            required
            placeholder="enter comment"
          />
          <Button type="submit">Add Comment</Button>
        </Form>
        <GoHome />
      </Container>
    </>
  );
};

export default OnePost;
