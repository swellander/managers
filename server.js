const http = require('http');
const port = process.env.PORT || 3000;
const fs = require('fs');
const db = require('./db');
const { User } = db; 

const homePage = fs.readFileSync('./public/index.html', 'utf8');
const bundle = fs.readFileSync('./dist/bundle.js');

const requestHandler = (req, res) => {
  console.log(req.url);

  if (req.url == '/bundle.js') {
    res.end(bundle)
  } 
  else if (req.url == '/api/users') {
    User.findAll()
      .then(users => res.end(JSON.stringify(users)))
      .catch(err => res.end(err))
  } 
  else res.end(homePage)
}

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) console.log('something went wrong', err);
  else console.log('listening on port ', port);
});

