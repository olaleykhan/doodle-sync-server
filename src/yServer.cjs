#!/usr/bin/env node

/**
 * @type {any}
 */
const WebSocket = require('ws')
const wss = new WebSocket.Server({ noServer: true })
const { setupWSConnection } = require('y-websocket/bin/utils');


export async function setupWebSocket(server) {
    const { setupWSConnection } = await import('y-websocket/bin/utils');
    setupWSConnection(server, {
        path: '/yjs'
    });
}



// const host = process.env.HOST || 'localhost'
// const port = process.env.PORT || 1234


// wss.on('connection', setupWSConnection(server, {
//     path: '/yjs' // specify a custom path for Yjs WebSocket connections
// }))

// server.on('upgrade', (request, socket, head) => {
//     // You may check auth of request here..
//     // See https://github.com/websockets/ws#client-authentication
//     /**
//      * @param {any} ws
//      */
//     //   const handleAuth = ws => {
//     //     wss.emit('connection', ws, request)
//     //   }
//     wss.handleUpgrade(request, socket, head, handleAuth)
// })