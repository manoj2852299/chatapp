const { Socket } = require('socket.io');

var express = require('express')
const app = express(); 
var http = require('http').Server(app); 
var io = require('socket.io')(http);

const name = 'mk';
const stash = 'stash';

const port=3000

app.use(express.static('public'))


io.on("connection", (socket) => {

    console.log('socket connected');

    socket.emit("check", "connection successful")

    socket.on("message", (data) => {

        console.log(data);

        socket.broadcast.emit("reply", data);

    })


})


app.get('/person1', (req, res) => {

    res.sendFile(__dirname + '/public/index1.html');


})

app.get('/person2', (req, res) => {

    res.sendFile(__dirname + '/public/index2.html');


})



http.listen(port, () => {

    console.log(`server listening on port ${port}`);
});
