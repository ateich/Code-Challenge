var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/stations', function (req, res) {
  var data = loadFile();
  res.json(data);
});

app.listen(1334, function () {
  console.log('Example app listening on port 3000!');
});

var loadFile = function() {
  var file = fs.readFileSync('database.json');
  return JSON.parse(file);
}
