import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {setChat} from './features/chatSlice'
import db from './firebase';
function SidebarChat({ id, chatName }) {
  
  const dispatch = useDispatch()
  const [chatInfo, setChatInfo] = useState([])

  useEffect(() => {
    if (id) {
      
    }
    db.collection('chats').doc(id).collection('messages').orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => (
        setChatInfo(
        snapshot.docs.map((doc)=>doc.data())
      )
    ))
    return () => {
      
    }
  }, [id])
    return (
      <div
        onClick={() =>
          dispatch(
            setChat({
              chatId: id,
              chatName: chatName,
            })
          )
        }
        className="flex relative items-center p-3 cursor-pointer  w-full md:overflow-hidden hover:bg-blue-400 hover:text-white "
      >
        <Avatar className="" src={chatInfo[0]?.photo} />
        <div className="ml-1 scrollbar-hide md:ml-2 p-1 ">
          <h3 className="text-sm sm:text-lg md:text-xl"> {chatName} </h3>
          <p className="text-xs sm:text-sm md:text-lg">
            {chatInfo[0]?.message}
          </p>
          <small className="absolute top-1 right-0 hidden md:flex m-2">
            {" "}
            {new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()}
          </small>
        </div>
      </div>
    );
}

export default SidebarChat
