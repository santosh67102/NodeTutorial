const http = require('http');

http.createServer((req,res) => {
    res.write('Hello World of node');
    res.end();
}).listen(5000, () => console.log('Server Running.....'));