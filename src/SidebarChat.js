import { Avatar } from '@material-ui/core'
import React from 'react'

function SidebarChat() {
    return (
      <div className="flex relative items-center p-3 cursor-pointer  w-full md:overflow-hidden hover:bg-blue-400 hover:text-white ">
        <Avatar className="" />
        <div className="ml-1 scrollbar-hide md:ml-2 p-1 ">
          <h3 className="text-sm sm:text-lg md:text-xl"> Channel Name</h3>
          <p className="text-xs sm:text-sm md:text-lg">Last message sent</p>
          <small className="absolute top-1 right-0 hidden md:flex m-2">
            {" "}
            timestamp{" "}
          </small>
        </div>
      </div>
    );
}

export default SidebarChat
