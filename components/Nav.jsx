import React from 'react';
import Link from 'next/link';
import NavItem from './styles/NavItem';

const Nav = () => (
  <div>
    <NavItem>
      <Link href="/dashboard">
        <a>dashboard</a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/players">
        <a>players</a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/sign-up">
        <a>Join</a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/social">
        <a>social</a>
      </Link>
    </NavItem>
  </div>
);

export default Nav;
