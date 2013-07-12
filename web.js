var express = require('express');
// I added the next block of code
var mybuffer = new buffer(fs.readFileSync('~/bitstarter/index.html'));
// End of block 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    response.send(mybuffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
