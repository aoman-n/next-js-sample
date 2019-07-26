/** @jsx jsx */
import { NextPage } from 'next';
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Link from 'next/link';
import Layout from '../components/Layout';

const Posts = [
  {id: 1, title: 'Ruby'},
  {id: 2, title: 'TypeScript'},
  {id: 3, title: 'Go'},
  {id: 4, title: 'Python'},
];


const PostLink: FC<{ title: string }> = ({ title }) => (
  <Link
    as={`/post/${title}`}
    href={{ pathname: '/post', query: { title } }}
  ><a>{title}</a></Link>
);

const PostList: NextPage = () => (
  <Layout title="list page">
    <h1>リストページ</h1>
    <ul>
      {Posts.map(post => (
        <li key={post.id}><PostLink title={post.title} /></li>
      ))}
    </ul>
  </Layout>
);

export default PostList;