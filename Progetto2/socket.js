var http = require('http'); 

var express = require('express'); 

var app = express(); 

var server = http.createServer(app); 

var io = require('socket.io')(server); 

  

app.set('view engine', 'ejs'); 

app.use(express.static(__dirname + '/public')); 

  

app.get('/', function (req, res) { 

  res.render('index') 

}); 

  

io.on('connection', function(socket){ 

  console.log('Stabilita connessione con il client'); 

  socket.on('disconnect',function(){ 

  console.log('Il server si e' disconnesso'); 

  }); 

}); 

server.listen(3000, function() { 

  console.log('In ascolto sulla porta 3000...'); 

}); 
