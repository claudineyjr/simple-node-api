var app = require('./config/server');

let porta = 5000;

app.listen(porta, function(){
  console.log('Servidor rodando na porta ' + porta);
})