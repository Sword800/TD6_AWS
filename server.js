// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

var connected_users = {};

class User{
  
  User(name){
    this.name = name;
}


};

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.post('/connect/:user', function(req, res) {
  
 var username = req.params.user;
 connected_users[username] = new User(username);
  
  res.json(connected_users);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
