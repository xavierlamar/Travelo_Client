import './chat.css'
import React from 'react'
import { useState } from 'react'
import io from "socket.io-client"
import ChatMessage from './ChatMessage'

const socket = io.connect("http://localhost:5000")
const Chat = () => {
    const [username,setUsername]= useState("")
    const [room,setRoom]= useState("")
    const [showChat,setShowChat]= useState(false)

    const joinRoom = () => {
        if(username !== "" && room !==""){
            socket.emit("join_room",room)
            setShowChat(true)
        }
    }
  return (
    <div className='App'>
        {!showChat ? (
            <div className='joinChatContainer'>

<h3>Join A Chat</h3>
<input type="text" placeholder="John..." onChange={(event)=>{setUsername(event.target.value)}} />

<input type="text" placeholder="Room ID" onChange={(event)=>{setRoom(event.target.value)}}/>

<button onClick={joinRoom}>Join A Room</button>


</div>
        ) : (
                  
        <ChatMessage socket={socket} username={username} room={room}/>  
        )}

    </div>
  )
}

export default Chat