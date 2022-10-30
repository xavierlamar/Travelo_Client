import axios from 'axios';
import React, { useEffect, useState } from 'react'
import img from "../../img/defaultProfile.png"

const Conversation = ({data, currentUser}) => {
  const [userData, setUserData] = useState(null)


 const getUser = (userId) =>axios.get(`http://localhost:4300/user/find/${userId}`);

  useEffect(()=> {

    const userId = data.members.find((id)=>id!==currentUser)

    const getUserData = async ()=> {
      try
      {
          const {data} =await getUser(userId)
         setUserData(data)
        //  console.log(data);
        //  dispatch({type:"SAVE_USER", data:data})
      }
      catch(error)
      {
        console.log(error)
      }
    }

    getUserData();
  }, [])
  
  return (
    <>
    <div className="follower conversation">
      <div>
        <div className="online-dot"></div>
          <img src={ img} 
          className='followerImage'
          style={{width:'50px',height:"50px"}}
          />
          <div className="name" style={{fontSize: "0.8rem"}}>
            <span>{userData?.username}</span>
            <span>Online</span>
            </div>
      </div>
    </div>
    <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  )
}

export default Conversation