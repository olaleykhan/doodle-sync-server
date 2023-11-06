import express from 'express';
import expressWs from 'express-ws';
// @ts-expect-error;
import { setupWSConnection } from '../node_modules/y-websocket/bin/utils.js';

const app = express();
const wsInstance = expressWs(app);
const port = process.env.PORT || 8000;

wsInstance.app.ws('/yjs/:id', (ws, req) => {
  setupWSConnection(ws, req); // Assuming this function can handle the ws object directly
  console.log('WebSocket connected on /yjs route to port: ', port);
  ws.on('error', function (err) {
    console.error(err);
  });
  // ws.on('message', function (msg) {
  //   console.log(msg);
  //   ws.send(JSON.stringify({
  //     message: 'Message received by server',
  //     val: msg
  //   }));
  // });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
