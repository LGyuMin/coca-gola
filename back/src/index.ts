import Koa, { Context } from 'koa';

const app = new Koa();

app.use((ctx: Context) => {
    ctx.body = 'Hello Coca-Gola';
})

app.listen(4000, () => {
    console.log('Listening to port 4000');
})
