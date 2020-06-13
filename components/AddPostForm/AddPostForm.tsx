import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import * as API from '../../services/api';
import s from 'styled-components';

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

const AddPostForm = () => {
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
    // console.log(newPost, 'newPost');

    API.setPost(newPost)
      .then(response => {
        console.log('it`s ok', response.data);
        Router.push('/');
      })
      .catch(error => {
        console.log(error, 'no posts ');
      });

    setTitle('');
    setBody('');
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
        <Button type="submit">Add Post</Button>
      </Form>
      <Link href="/">
        <HomeLink>Go Home</HomeLink>
      </Link>
    </>
  );
};

export default AddPostForm;
