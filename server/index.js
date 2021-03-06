const express = require('express');
const server = express();
const port = process.env.PORT || 3000;
const db = require('./db');
const path = require('path');

server.use(express.static(path.join(__dirname, '../client/public')))
server.use(express.json());
server.use('/api', require('./router'))

const init = () => {
  return db.syncSeed()
    .then(() => server.listen(port, () => console.log(`listening on port ${port}`)))
    .catch(err => console.log(err))
}

init();

