import React from 'react';
import Posts from './Posts/Posts';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => (
  <Container>
    <h2>Apppprrrrrr</h2>
    <Posts />
  </Container>
);

export default App;
