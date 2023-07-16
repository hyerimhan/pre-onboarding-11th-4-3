import React from 'react';
import Logo from './svgs/Logo';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Nav from './Nav';
import Layout, { LayoutStyle } from './Layout';

const Header = () => {
  return (
    <HeaderStyle>
      <Layout>
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <Nav />
      </Layout>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  height: 56px;
  display: flex;
  align-items: center;

  ${LayoutStyle} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 140px;
  }
`;
