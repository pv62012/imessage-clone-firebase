import { Avatar, IconButton } from '@material-ui/core'
import  RateReviewOutlinedIcon  from '@material-ui/icons/RateReviewOutlined'
import SearchIcon from '@material-ui/icons/Search'
import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import SidebarChat from './SidebarChat'
import {selectUser} from './features/userSlice'
import db, { auth } from './firebase'

function Sidebar() {
  const user = useSelector(selectUser)
  const [chats, setChats] = useState([])


  useEffect(() => {
    db.collection('chats').onSnapshot(docsnap => (
      setChats(
        docsnap.docs.map((doc) => ({
          id: doc.id,
          data:doc.data(),
        }))
      )
    ))
  }, [])

  const addChat = () => {
    const chatName = prompt('Please Enter a Chat name');

    db.collection('chats').add({
      chatName: chatName,
      
    })
  }
  
    return (
      <div className=" w-1/3 h-screen flex flex-col bg-[#f5f5f5] border-r-[1px] border-gray-500 ">
        <div className="sidebar_header flex flex-col items-center h-40 md:flex-row md:h-14 justify-evenly">
          <Avatar className="m-1 cursor-pointer" src={user.photo} onClick={()=>auth.signOut()} />
          <div className="flex items-center justify-center bg-[#e1e1e1] text-gray-700 rounded-md">
            <SearchIcon className=" p-1" />
            <input
              type="text"
              placeholder="Search..."
              className=" object-contain w-24 md:w-40 border-none bg-transparent outline-none"
            />
          </div>
          <IconButton varient="outlined">
            <RateReviewOutlinedIcon onClick={addChat} />
          </IconButton>
        </div>
        <div className="sidabar_chats overflow-y-scroll scrollbar-hide">
          {
            chats.map(({ id, data:{chatName}}) => (
              <SidebarChat key={id} id={id} chatName={chatName} />
            ))
          }
          
         
        </div>
      </div>
    );
}

export default Sidebar
