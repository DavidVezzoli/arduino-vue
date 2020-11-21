const express = require('express')
const http = require('http')
const app = express()
const five = require("johnny-five");
const board = new five.Board({ repl: false });
const server = http.createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

const port = process.env.PORT || 4000

app.use(express.static(__dirname + '/dist/'));

server.listen(port, () => {
    console.log(`Server is up and runnning on port ${ port }`)
})

board.on("ready", function() {
    io.on('connection', (socket) => {

        socket.on('disconnect', function() {
            console.log(`client disconnected.`)
        });

        const led = new five.Led(13)

        socket.on("switch-led", (data) => {
            data ? led.on() : led.off();
        });
    })
})