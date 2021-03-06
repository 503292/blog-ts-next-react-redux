import React from 'react';
import Link from 'next/link';

import s from 'styled-components';

const TopLink = s.a`{
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: red;
    }
}`;
const Nav = s.nav`{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
}`;

const Navbar = () => {
  return (
    <Nav>
      <Link href="/">
        <TopLink>BLOG</TopLink>
      </Link>
      <Link href="posts/new">
        <TopLink>Add new Post</TopLink>
      </Link>
    </Nav>
  );
};

export default Navbar;
