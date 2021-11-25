import React from 'react'
import { useState } from 'react'
import { io } from 'socket.io-client'
// import { useEffect } from 'react'
const socket = io('http://localhost:5000')


const Main = () => {

    // useEffect(() => {
        socket.on('connect',()=>{
            setlist([`you connected with id : ${socket.id}`,...list])
        })
    // }, [1])

    const [list, setlist] = useState(['hii','hey'])
    const [message, setmessage] = useState('')
    const [room, setroom] = useState('')

    socket.on('recieve-message', message => {
        setlist([...list, message])
    }) 

    const displayMessage = (e) => {
        e.preventDefault();
        setlist([...list, message])
        socket.emit('send-message',message , room );
        setmessage('')
    }

    const joinRoom = (e) => {
        e.preventDefault();
        socket.emit('join-room',room)
    }

    return (
        <div>
            {list.map((item , index) => (
                <h3 key={index}>{item}</h3>
            ))}
            <form onSubmit={displayMessage}>
                <input type="text" placeholder="message" value={message} onChange={(e) => setmessage(e.target.value)} /> 
                <input type="submit" value="send" />
            </form>
            <form onSubmit={joinRoom}>
                <input type="text" placeholder="room" value={room} onChange={(e) => setroom(e.target.value)} /> 
                <input type="submit" value="join" />
            </form>
        </div>
    )
}

export default Main