/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Link from 'next/link'
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


export default () => (
  <Layout title="next-js-sample top page">
    <h1 css={style}>Next.jsアプリのトップページ</h1>
    <Link href="/about">
      <StyledLink>aboutへ！</StyledLink>
    </Link>
    <Link href="/list">
      <button>listへ</button>
    </Link>
  </Layout>
);