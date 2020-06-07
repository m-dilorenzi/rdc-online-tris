// Requires external modules
const express   = require('express');
const http      = require('http');
const socketio  = require('socket.io');

// Requires internal modules
const joinUser          = require('./users.js').joinUser;
const leaveUser         = require('./users.js').leaveUser;
const getUserById       = require('./users.js').getUserById;
const getUsersByRoom    = require('./users.js').getUsersByRoom;


const app       = express();
const server    = http.createServer(app);
const io        = socketio(server);

const PORT      = 8080;
const listener  = server.listen(PORT, () =>
    console.log(`The server is listening on port: ${listener.address().port}`)
);

// Define static directory public_html
app.use(express.static(`${__dirname}/public_html`));

