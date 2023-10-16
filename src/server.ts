import app from './app.js';
import 'dotenv/config';
import http from 'http';
// import setUpWebSocket from './yServer.cjs';
import { setupWSConnection } from 'y-websocket/bin/utils';
// import connectDB from './connectDB.js';
// import scheduleMatch from './scheduleMatch.js';

const PORT = process.env.PORT ?? 8000;

const server = http.createServer(app);

async function startServer (): Promise<void> {
  // await setUpWebSocket(server);

  server.listen(PORT, () => { console.log(`running on port : ${PORT}`); });
}

await startServer();
// Initialize y-websocket server
setupWSConnection(server, {
  path: '/yjs' // specify a custom path for Yjs WebSocket connections
});

// Your existing error handling and server listening logic
// server.listen(PORT, () => {
//   console.log(`Server running on port: ${PORT}`);
// });

process.on('bad auth', (err: unknown) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');

  if (err instanceof Error) {
    console.log(err.name, err.message);
  }

  server.close(() => {
    process.exit(1);
  });
});
