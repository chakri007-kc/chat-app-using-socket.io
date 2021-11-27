const io = require('socket.io')(5000,{
    cors: {
        origin: ['http://localhost:3000'] ,
    }
})  

io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on("send-message", (message,room) => {
        if(room === ""){
            socket.broadcast.emit('recieve-message',message)
        }
        else{
            socket.to(room).emit('recieve-message',message)
        }
        console.log(message)
    })
    socket.on('join-room', (room,cb) => {
        socket.join(room)
        cb(`Joined ${room}`)
    })
})