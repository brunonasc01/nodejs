const http = require('http');
const url = require('url');

const server = http.createServer((request,	response) =>	{
    response.writeHead(200,	{'Content-Type':'text/html'});
    response.write('<h1>Dados da query string</h1>');
    
    const result = url.parse(request.url, true);

    var query = result.query;

    for(var key in query){
        response.write('<h2>'+key+': '+query[key]+'</h2>');
    }
   
    response.end();
});

server.listen(3000,	()	=>	{
    console.log('Servidor rodando!');
}); 