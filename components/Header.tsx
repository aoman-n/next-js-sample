/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Color from '../const/Color';
import Size from '../const/Size';

const headerStyle = css`
  height: ${Size.HEADER_HEIGHT}px;
  width: 100vw;
  background-color: ${Color.THEME.PRIMARY};
  display: flex;
	justify-content: flex-end;
	align-items: center;
  h1 {
    margin-right: auto;
    font-size: 1.3em;
    color: #FFFFFF;
    text-shadow: 2px 2px 3px ${Color.FONT.DARK};
    padding: 0 20px;
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
      font-size: ${Size.FONT.BASE}px;
      color: #FFFFFF;
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