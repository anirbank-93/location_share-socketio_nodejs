const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const { initializeRoutes } = require('./app/routes');

const app = express();
const httpServer = createServer(app);
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializeRoutes(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8081/',
    methods: ['GET', 'POST'],
    // transports: ['websocket', 'polling'],
    // credentials: true,
  },
  // allowEIO3: true,
});

io.on('connection', function (socket) {
  console.log('We are live and connected');
  console.log(socket.id);
});

httpServer.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});
