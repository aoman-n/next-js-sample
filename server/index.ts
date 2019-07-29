import Koa from 'koa';
import Router from 'koa-router';
import next from 'next';
import routes from '../routes';

const port = 3000;
const dev = process.env.NODE_DEV !== 'production';

// Next.jsの呼び出し
const app = next({ dev });

// 先ほど作成したルーティング定義(next-routes)をNext.jsに組み込む
// 戻り値として、next-routesのルーティングhandlerを受け取る
const handle = routes.getRequestHandler(app);

// Hot reloadをするために、Next.jsがprepare()を使いserver(Koa)を監視する
app.prepare().then(() => {
  // koa, koa-routerのインスタンスを生成
  const server = new Koa();
  const router = new Router();

  // server(Koa)に届くリクエスト全てを、next-routesでラップしたNext.jsのhandlerに渡す処理。これによりctx.req, ctx.resをNext.jsに渡し、処理を行うことができる
  router.get('*', async (ctx: any) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  // server(Koa)でリクエストを受けるための準備
  server.use(async (ctx: any, next: any) => {
    ctx.res.statusCode = 200;
    await next();
  });

  // server(Koa)のルーティング設定
  server.use(router.routes());

  // server(Koa)の起動
  server.listen(port, () => {
    console.log('start server...');
  });
});