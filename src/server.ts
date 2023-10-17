import 'dotenv/config';
import http from 'http';
import expressWs from 'express-ws';

import app from './app.js';
import { type WebSocket } from 'ws';
import { type Request } from 'express';
// @ts-expect-error
import * as yWebsocket from '../node_modules/y-websocket/bin/utils.js';

const PORT = process.env.PORT ?? 8000;
// connect y-websocekt server to express app

const server = http.createServer(app);
const wsInstance = expressWs(app, server);

wsInstance.app.ws('/yjs', (ws: WebSocket, req: Request) => {
  yWebsocket.setupWSConnection(ws, req);
  console.log('y-websocket connected', ws.url);
});

// console.log(wsInstance, 'wsInstance');

async function startServer (): Promise<void> {
  server.listen(PORT, () => { console.log(`running on port : ${PORT}`); });
}

await startServer();

// handle unhandled rejections

process.on('bad auth', (err: unknown) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');

  if (err instanceof Error) {
    console.log(err.name, err.message);
  }

  server.close(() => {
    process.exit(1);
  });
});
