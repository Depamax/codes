var http = require('http'); // richiama la libreria http

var server = http.createServer(function (req, res) { //questa funzione callback verrà richiamata quando qualcuno si connette al sito
  // req = informazioni della richiesta del visitatore della pagina
  // res = la risposta ovvero ciò che si restituisce albrowser del visitatore (normalmente pagina html)
  res.writeHead(200, {'Content-Type': 'text/plain'}); //codice di ok
  res.end('Prova 2'); //qui di solito si mette html
});

server.listen(8080); //porta in cui mettiamo in ascolto il server