import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import * as API from '../../services/api';
import s from 'styled-components';
import queryString from 'querystring';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/posts/postsSelectors';
import { updatePost } from '../../redux/posts/postsActions';

const Form = s.form`{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
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
const HomeLink = s.a`{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
        color: red;
    }
}`;

type PropsType = {
  posts: Array<any>;
};

const AddPostForm: React.FC<PropsType> = ({ posts, updatePost }) => {
  const [id, setId] = useState('');

  useEffect(() => {
    const parsed: any = queryString.parse(location.search)['?id'];
    if (parsed) {
      setId(parsed);
    }
  }, []);

  useEffect(() => {
    if (id) {
      const updatePost = posts.find(el => el.id === Number(id));
      console.log(updatePost.title, 'updatePost');
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

    const newPost = {
      title,
      body,
    };

    if (id) {
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
    setId('');
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
      <Link href="/">
        <HomeLink>Go Home</HomeLink>
      </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);
