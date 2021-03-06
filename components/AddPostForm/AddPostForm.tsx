import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import * as API from '../../services/api';
import s from 'styled-components';
import queryString from 'querystring';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/posts/postsSelectors';
import { updatePost } from '../../redux/posts/postsActions';
import GoHome from '../GoHome/GoHome';

const Form = s.form`{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
}`;
const InfoText = s.p`{
    margin: 0;
    font-weight: 600;
}`;
const InputTitle = s.input`{
    margin-bottom: 10px;

}`;
const InputBody = s.input`{
    margin-bottom: 20px;
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
    }
}`;

type PostsType = {
  id: number;
  title: string;
  body: string;
};

type PropsType = {
  posts: Array<PostsType>;
  updatePost: () => void;
};

const AddPostForm: React.FC<PropsType> = ({ posts, updatePost }: PropsType) => {
  const [id, setId] = useState(0);

  useEffect(() => {
    const parsed: number = Number(queryString.parse(location.search)['?id']);
    if (parsed) {
      setId(parsed);
    }
  }, []);

  useEffect(() => {
    if (id) {
      const updatePost = posts.find(el => el.id === id);
      if (!updatePost) {
        return;
      }
      setTitle(updatePost.title);
      setBody(updatePost.body);
    }
  }, [id]);

  // title
  const [title, setTitle] = useState('');

  const handlerChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  // body
  const [body, setBody] = useState('');

  const handlerChangeBody = (e: any) => {
    setBody(e.target.value);
  };

  // save
  const handlerSubmit = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    const newPost: Array<string> = {
      // @ts-ignore
      title,
      // @ts-ignore
      body,
    };

    if (id) {
      //@ts-ignore
      API.updatePost(id, newPost)
        .then((response: any) => {
          console.log('update it`s ok', response.data);
          Router.push('/');
          updatePost();
        })
        .catch((error: any) => {
          console.log(error, 'no posts ');
        });
    } else {
      API.setPost(newPost)
        .then(response => {
          console.log('create it`s ok', response.data);
          Router.push('/');
        })
        .catch(error => {
          console.log(error, 'no posts ');
        });
    }

    setTitle('');
    setBody('');
    setId(0);
  };

  return (
    <>
      <Form onSubmit={handlerSubmit}>
        <InfoText>Title post</InfoText>
        <InputTitle
          onChange={handlerChangeTitle}
          type="text"
          name="title"
          value={title}
          required
        />
        <InfoText>Body post</InfoText>
        <InputBody
          onChange={handlerChangeBody}
          type="text"
          name="body"
          value={body}
          required
        />
        <Button type="submit">{id ? 'Update Post' : 'Add Post'}</Button>
      </Form>

      <GoHome />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    posts: getPosts(state),
  };
};

const mapDispatchToProps = {
  updatePost,
};

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);
