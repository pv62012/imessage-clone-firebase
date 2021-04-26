import React, { useState } from 'react'
import MdSend from '@material-ui/icons/Send'
function Chat() {
const [input, setInput] = useState("")
    const sendMessage = (e) => {
        e.preventDefault();
         setInput("")
    }
    return (
      <div className=" w-2/3 flex flex-col bg-white">
        {/* chat Header */}
        <div className="h-14 p-3 flex justify-between  border-b-[1px] border-gray-500 bg-[#f5f5f5]">
          <h4 className="text-gray-500 font-medium">
            {" "}
            To: <span className="text-black">Channel Name</span>
          </h4>
          <strong>Details</strong>
        </div>
        {/* chat message */}
            <div className="flex-1">
                hello
       </div>
            {/* chat input */}
            <div className="w-full flex items-center px-2 py-2 border-t-[1px] border-gray-500 bg-[#f5f5f5]">
                <form action="" className="flex w-full ">
                    <input type="text" placeholder="message" value={input} onChange={(e)=>setInput(e.target.value) } className="outline-none flex items-center px-3  py-2 md:px-5 sm:w-4/5 md:w-11/12"/>
                    <button type="submit" onClick={sendMessage} className="text-xs sm:text-sm md:text-sm md:w-1/12" > <MdSend/> </button>
                </form>
            </div>
      </div>
    );
}

export default Chat
