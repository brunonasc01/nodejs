const http = require('http');
const url = require('url');
const fs = require('fs');

const rotear = function(pathname){
    var htmlFile = './html/artigos.html';

    if(pathname == '/artigos' || pathname == '/'){
        htmlFile = './html/artigos.html';
    }
    else if(pathname == '/contato') {
        htmlFile = './html/contato.html';
    }
    else {
        htmlFile = './html/erro.html';
    }

    return htmlFile;
};

const server = http.createServer((request, response) => {
    // control for favicon
    if (request.url == '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'} );
        response.end();
        return;
    }
    const result = url.parse(request.url);
    console.log(result.pathname);

    var htmlFile = rotear(result.pathname);

    fs.readFile(htmlFile, (erro, html) => {
        response.writeHeader(200, {'Content-Type': 'text/html'});
        //response.write(html);
        response.end(html);
    });
});

server.listen(3000, () =>{
    console.log('Executando Site Html');
});