const express = require("express");
const path = require("path");
const characterFile = require('../database/data.json');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const dbPath = path.join(__dirname, '../database/data.json');
app.use(express.static('../database/data.json'));
app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000);

app.get('/', (req, res) => {
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
  socket.emit('news', {hello: 'world'});
  socket.on('other event', function (data) {
    console.log(data);
  });
});
// app.listen(3000, () => {
//   console.log("I love you 3000");
// });
