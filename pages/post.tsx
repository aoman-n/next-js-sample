import { FC } from 'react';
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'
import Layout from '../components/Layout';

const Post: FC<WithRouterProps & {}> = ({ router }) => {
  const title = String(router.query.title);

  return (
    <Layout title={title}>
      <h2>
        {router.query.title}のページだよ！
      </h2>
    </Layout>
  )
};

export default withRouter(Post);