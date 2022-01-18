import Koa from 'koa';
import { createServer } from 'http';
import cors from '@koa/cors';
import { Server } from 'socket.io';
import { ServerToClientEvents, ClientToServerEvents, InterServerEvents, SocketData } from './socket/server';

const app = new Koa();
const httpServer = createServer(app.callback());

// 웹소켓 cors 설정
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(httpServer, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

// api cors 설정
app.use(cors({
    origin: 'http://localhost:3000'
}));

io.on("connection", (socket) => {
    console.log('a user connected');
    socket.on('hello', () => {
        console.log('Hi');
    })
});

httpServer.listen(4000, () => {
    console.log('Listening to port 4000');
});