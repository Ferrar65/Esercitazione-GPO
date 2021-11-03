var http = require('http'); 

var express = require('express'); 

var app = express(); 

var server = http.createServer(app); 

  

app.set('view engine', 'ejs'); 

app.use(express.static(__dirname + '/public')); 

  

var titolo = "Ecco alcuni componenti di Arduino del vostro kit di STA che iniziano con la lettera p" 

var componentiArray = ['potenziometro', 'piezo', 'phototransistor', 'pushbutton']; 

  

app.get('/', function (req, res) { 

res.render('index', { 

titolo: titolo, 

componenti: componentiArray 

}); 

}); 

  

server.listen(3000, function() { 

console.log('In ascolto sulla porta 3000...'); 

}); 
