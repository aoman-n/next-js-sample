import { NextFC } from 'next';
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'
import axios from 'axios';
import Layout from '../components/Layout';

interface PostProps {
  articles: object[];
  error?: any;
}

const Post: NextFC<WithRouterProps & PostProps> = ({ router, articles, error }) => {
  const title = String(router.query.title);

  if (error) {
    return (
      <div>errorです！</div>
    )
  }

  return (
    <Layout title={title}>
      <h2>
        {router.query.title}の新着記事だよ！
      </h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}><a href={article.url}>{article.title}</a></li>
        ))}
      </ul>
    </Layout>
  )
};

Post.getInitialProps = async function(ctx) {
  const { title } = ctx.query;
  try {
    const res = await axios.get(`https://qiita.com/api/v2/items?query=${title}`);
    return {
      articles: res.data,
    }
  } catch(err) {
    return {
      error: err,
    }
  }
};

export default withRouter(Post);