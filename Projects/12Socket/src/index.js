const path=require('path');
const http=require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server=http.createServer(app);


const io = socketio(server);


const port = process.env.PORT || 3000;

const publicDirectoryPath =path.join(__dirname,'../public');


app.use(express.static(publicDirectoryPath));

let count =0;



io.on('connection',(socket)=>{
    
    console.log("New websocket connection");
    // socket.emit('countupdated',count);

    socket.on('increment',()=>{
    count++;
    console.log("increment",count);
    //socket.emit('countupdated',count);
     io.emit('countupdated',count);    
});
});

server.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});



