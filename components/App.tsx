import React from 'react';
import Posts from './Posts/Posts';
import Navbar from './Navbar/Navbar';
import Head from 'next/head';
import s from 'styled-components';

const Container = s.div`
//   font-size: 1.5em;
//   text-align: center;
  color: palevioletred;
`;

const App = () => (
  <Container>
    <Head>
      <title>blog</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <Posts />
  </Container>
);

export default App;
