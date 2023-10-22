import { WebSocketServer } from 'ws';
import http from 'http';
import app from './app.js';
// @ts-expect-error;
import { setupWSConnection } from '../node_modules/y-websocket/bin/utils.js';

const port = 1234;

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req, { gc: req.url?.slice(1) !== 'prosemirror-versions' });
  console.log('Web socket connected on port : ', port);
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
