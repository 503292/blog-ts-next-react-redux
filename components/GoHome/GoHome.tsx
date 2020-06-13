import React from 'react';
import Link from 'next/link';
import s from 'styled-components';

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

const GoHome = () => {
  return (
    <>
      <Link href="/">
        <HomeLink>Go Home</HomeLink>
      </Link>
    </>
  );
};

export default GoHome;
