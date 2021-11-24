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

  

var valorePulsantePassoPasso = 0; 

  

  

io.on('connection', function(socket){ 

  console.log('Stabilita connessione con il client'); 

  io.emit('messaggio ID1', valorePulsantePassoPasso); 

  

  socket.on('messaggio ID1', function(msg){ 

  valorePulsantePassoPasso = 1 - valorePulsantePassoPasso; 

  io.emit('messaggio ID1', valorePulsantePassoPasso); 

  console.log('Ho ricevuto un messaggio dal client:',msg); 

  }); 

     

  socket.on('disconnect',function(){ 

  console.log('Il server si e\' disconnesso'); 

  }); 

}); 

server.listen(3000, function() { 

  console.log('In ascolto sulla porta 3000...'); 

}); 
