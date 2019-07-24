import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ title, children }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>{title}</title>
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;