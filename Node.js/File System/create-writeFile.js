// Sia update che create - Riscrive il contenuto in base a ciò che gli ho dato

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});