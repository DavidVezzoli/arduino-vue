const express = require("express");
const http = require("http");
const app = express();
const five = require("johnny-five");
const board = new five.Board({ repl: false });
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});

const port = process.env.PORT || 4000;

app.use(express.static(__dirname + "/dist/"));

server.listen(port, () => {
    console.log(`Server is up and runnning on port ${port}`);
});

board.on("ready", function() {
    const LED = 13;
    const isObstaclePin = 2;
    const led = new five.Led(LED);

    io.on("connection", (socket) => {
        this.pinMode(isObstaclePin, five.Pin.INPUT);
        this.digitalRead(isObstaclePin, function(value) {
            value === 1 ? led.off() : led.on();
            io.emit("light-on-off", value);
        });

        socket.on("disconnect", function() {
            console.log(`client disconnected.`);
        });
    });
});