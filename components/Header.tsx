/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Link from 'next/link';

const headerStyle = css`
  height: 70px;
  width: 100vw;
  background-color: lightcyan;
  display: flex;
	justify-content: flex-end;
	align-items: center;
  h1 {
    margin-right: auto;
    font-size: 2em;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  ul {
    display: flex;
    list-style: none;
    li {
      margin-right: 20px;
    }
  }
`

const Header: FC = () => (
  <header css={headerStyle}>
    <Link href="/">
      <h1>Next.js!</h1>
    </Link>
    <nav>
      <ul>
        <li>彼方へ</li>
        <li>マイページ</li>
        <li>ログアウト</li>
      </ul>
    </nav>
  </header>
);

export default Header;