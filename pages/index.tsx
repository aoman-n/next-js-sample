/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Link from 'next/link'
import Router from 'next/router'
import Layout from '../components/Layout';

const style = css`
  color: hotpink;
`;

const StyledLink = styled.a`
  color: skyblue;
  font-size: 26px;
  text-decoration: underline;
  cursor: pointer;
`;

const handler = () => {
  Router.push({
    pathname: '/about',
  })
};

const Index: FC = () => (
  <Layout title="next-js-sample top page">
    <h1 css={style}>Next.jsアプリのトップページ</h1>
    <ul>
      <li><button onClick={handler}>handlerで遷移！</button></li>
      <li><Link href="/about">
        <StyledLink>aboutへ！</StyledLink>
      </Link></li>
      <li><Link href="/postList">
        <StyledLink>post listへ！</StyledLink>
      </Link></li>
    </ul>
  </Layout>
);

export default Index;