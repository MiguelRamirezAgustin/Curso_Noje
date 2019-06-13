// const http = require('http');
// var Color = require('color');

// var headerServe = function(esq, res){
//    res.writeHead(200);
//    res.write('HOLA NODE', { 'Content-Type': 'text/plain' }),
//    res.end();
// }


// const serve = http.createServer(headerServe);

// serve.listen(8000 ,function(){
//   console.log('servidor acrtivo--->>> '.red);
// });

const express= require('express');
var Color = require('color');

const serve= express();

serve.get('/', (esq, res)=>{
   res.send('texto');
   res.end();
})

serve.listen(3000, ()=>{
  console.log('Puerto 3000'.red);
})