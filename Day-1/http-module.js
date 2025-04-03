const http = require ("http"); 
// const books = [
//     { id: 1, title: 'Book 1', author: 'Author 1' },
//     { id: 2, title: 'Book 2', author: 'Author 2' },
//     { id: 3, title: 'Book 3', author: 'Author 3' }
//    ];
   
//    htttp: fakestoreapi.com/products
//    http: localhost:8000/books books


// fronted -> backend -> request
// backend -> fronted -> response
const server = http.createServer((req , res)=>{
    if (req.method == "GET" &&){
        res .end("Hello");
    }
});
const backendport =8000;
server.listen(backendport,() =>
    console.log (`server is listening on port ${backendport}`)
);