import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

// Status bar for page loads
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Icon = styled.a`
  cursor: pointer;
  display: inline-block;
  height: 100px;
  margin: 1rem;
  box-shadow: 1px 1px 5px #999;
  border-radius: 3px;
  @media (min-width: 600px) {
    height: 80px;
  
  }
  img {
    height: 100%;
  }
`;

const Header = () => (
  <div>
    <Link href="/">
      <Icon>
        <img src="/static/card-small.png" alt="THL" />
      </Icon>
    </Link>
    <Nav />
  </div>
);

export default Header;
