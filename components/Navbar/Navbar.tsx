import React from 'react';

import Link from 'next/link';

import s from 'styled-components';

const TopLink = s.a`{
    text-decoration: none;
}`;

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <TopLink>Home Posts</TopLink>
      </Link>{' '}
      |{' '}
      <Link href="/new_posts">
        <TopLink>New Post</TopLink>
      </Link>
    </nav>
  );
};

export default Navbar;
