// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router.js');
  const bodyparser = require('body-parser')
  const server = express();
  const port = 3000;

  server.use(bodyparser.json());

  server.use(express.static(path.join(__dirname + '../client/dist')));

  server.use(router)

  server.listen(port, () => console.log('Connected to port: 3000'))