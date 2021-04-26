import { Avatar, IconButton } from '@material-ui/core'
import  RateReviewOutlinedIcon  from '@material-ui/icons/RateReviewOutlined'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
      <div className=" w-1/3 h-screen flex flex-col bg-[#f5f5f5] border-r-[1px] border-gray-500 ">
        <div className="sidebar_header flex flex-col items-center h-40 md:flex-row md:h-14 justify-evenly">
          <Avatar className="m-1 cursor-pointer" />
          <div className="flex items-center justify-center bg-[#e1e1e1] text-gray-700 rounded-md">
            <SearchIcon className=" p-1" />
            <input
              type="text"
              placeholder="Search..."
              className=" object-contain w-24 md:w-40 border-none bg-transparent outline-none"
            />
          </div>
          <IconButton varient="outlined">
            <RateReviewOutlinedIcon />
          </IconButton>
        </div>
        <div className="sidabar_chats overflow-y-scroll scrollbar-hide">
          <SidebarChat />
         
        </div>
      </div>
    );
}

export default Sidebar
