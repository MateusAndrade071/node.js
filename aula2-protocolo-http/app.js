// Importa o módulo HTTP nativo do Node.js para criar um servidor web.
var http = require('http');

// Cria o servidor HTTP e define a função de callback que será executada para cada requisição recebida.
http.createServer(function(req, res) {
    // Define a resposta que será enviada ao cliente. Nesse caso, uma mensagem simples "Ola!".
    res.end("Ola!");
// Faz o servidor ouvir requisições na porta 8081.
}).listen(8081);

// Exibe uma mensagem no console indicando que o servidor está ativo e em execução.
console.log("O servidor ta rodando");
