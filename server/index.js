const express = require("express");
const app = express();
const path = require("path");
const characterFile = require('../database/data.json');
// var server = require('http').Server(app);
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const publicPath = path.join(__dirname, 'public/');
const staticMiddlware = express.static(publicPath);
const dbPath = path.join(__dirname, '../database/data.json');
server.use(express.static('../database/data.json'));
server.use(express.static(path.join(__dirname, 'public')));

server.use(staticMiddleware);
server.use(sessionMiddleware);



server.get('/api/check', (req, res) => {
  console.log('no')
  res.send("yes").status(200);
});

app.get('/api/characters', (req, res, next) => {
  const characterArray = [];
  for (const characterId in characterFile.characters) {
    characterArray.push(characterFile.characters[characterId]);
  }
  res.status(200).send(characterArray);
});

io.on('connection', (socket) => {

  const { id } = socket.client;
  console.log(`User connected: ${id}`);
});
const PORT = 3000;
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));
