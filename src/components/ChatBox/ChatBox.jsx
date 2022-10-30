import "./ChatBox.css"
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import img from "../../img/defaultProfile.png"
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'


const ChatBox = ({chat,currentUser,setSendMessage,receivedMessage}) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
    
  const handleChange = (newMessage)=> {
    setNewMessage(newMessage)
  }

    const getUser = (userId) =>axios.get(`http://localhost:4300/user/find/${userId}`);
    const getMessages = (id) =>axios.get(`http://localhost:4300/message/${id}`);
    const addMessage = (data) =>axios.post(`http://localhost:4300/message/`,data);



  // fetching data for header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUser]);



  // fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);


  // Send Message
  const handleSend = async(e)=> {
    e.preventDefault()
    const message = {
      senderId : currentUser,
      text: newMessage,
      chatId: chat._id,
  }
  
  const receiverId = chat.members.find((id)=>id!==currentUser);
  // send message to socket server
  setSendMessage({...message, receiverId})
  // send message to database
  try {
    const { data } = await addMessage(message);
    setMessages([...messages, data]);
    setNewMessage("");
  }
  catch
  {
    console.log("error")
  }

}

// Receive Message from parent component
useEffect(()=> {
  console.log("Message Arrived: ", receivedMessage)
  if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
    setMessages([...messages, receivedMessage]);
  }

},[receivedMessage])

    

  return (
    <>
    <div className="ChatBox-container">
        {chat? (
            <>
        <div className="chat-header">
        <div className="follower conversation">
      <div>
          <img src={ img} 
          className='followerImage'
          style={{width:'50px',height:"50px"}}
          />
          <div className="name" style={{fontSize: "0.8rem"}}>
            <span>{userData?.username}</span>
        </div>
      </div>
    </div>
    <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </div>
    {/* chatbox messages */}
    <div className="chat-body">
        {messages.map((message)=>(
            <>
            <div className={
                message.senderId === currentUser? "message own" : "message ownn"
            }>
                <span>{message.text}</span>
                <span>{format(message.createdAt)}</span>
            </div>
            </>
        ))}
    </div>

    {/* chat-sender */}
    <div className="chat-sender">
        <div>+</div>
        <InputEmoji
        value={newMessage}
        onChange = {handleChange}/>
    <button className="send-button button" 
    onClick = {handleSend}
    >Send</button>
    </div>
    </> 
        ) :(
            <span className="chatbox-empty-message">
               Tap on Chat  to start Conversation...
            </span>
        )}
       
    </div>
    </>
  )
}

export default ChatBox