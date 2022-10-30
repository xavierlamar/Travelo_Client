import "./Chat.css"
import React, { useEffect, useRef, useState } from 'react'
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import NavIcons from "../../components/NavIcons/NavIcons";

import axios from "axios";
import Conversation from "../../components/Coversation/Conversation"
import ChatBox from "../../components/ChatBox/ChatBox";
import {io} from 'socket.io-client'
import NavBar from "../../components/NavBar";

const Chat = () => {
  const socket = useRef();
  const user = JSON.parse(localStorage.getItem('userInfo'));

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
    

  const userChats = (id) => axios.get(`http://localhost:4300/chat/${id}`)

  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  
    
// Connect to Socket.io
useEffect(() => {
  socket.current = io("http://localhost:8800");
  socket.current.emit("new-user-add", user._id);
  socket.current.on("get-users", (users) => {
    setOnlineUsers(users);
    // console.log(onlineUsers);
  });
}, [user]);

// sending message to socket server
useEffect(() => {
  if(sendMessage!==null){
    socket.current.emit('send-message',sendMessage)
  }
},[sendMessage])



  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    }

    );
  }, []);






  return (
    <>
    <NavBar />
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Conversation
                  data={chat}
                  currentUser={user._id}
                  // online={checkOnlineStatus(chat)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
        </div>
        <ChatBox
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
    </>
  )
}

export default Chat