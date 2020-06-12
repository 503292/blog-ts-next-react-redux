import React from 'react';
import s from 'styled-components';

const Form = s.form`{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    
}`;

const InputTitle = s.input`{
    margin-bottom: 10px;

}`;
const InputBody = s.input`{
    margin-bottom: 10px;
}`;
const Button = s.button`{
    width: 50%;
    margin: 0 auto;
}`;

const DescrTitle = s.p`{
    margin: 0;
}`;
const DescrBody = s.p`{
    margin: 0;
}`;

const AddPostForm = () => {
  return (
    <Form>
      <DescrTitle>Title</DescrTitle>
      <InputTitle />
      <DescrBody>Body</DescrBody>
      <InputBody />

      <Button type="submit">Add Post</Button>
    </Form>
  );
};

export default AddPostForm;
