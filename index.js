// index.js
// where your node app starts

// init project
var express = require('express');
const os = require("node:os")
const dotenv = require("dotenv")

var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
const {
  Agent
} = require('node:http');
const {
  isIPv4
} = require('node:net');
app.use(cors({
  optionsSuccessStatus: 200
})); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
const resObj = {};

app.get("/api/whoami", (req, res) => {
  console.log(req.ip);
  resObj["ipaddress"] = (req.socket.remoteAddress)
  resObj["language"] = req.header("accept-language");
  resObj["software"] = req.header("user-agent");
  res.json(resObj);
});




// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})