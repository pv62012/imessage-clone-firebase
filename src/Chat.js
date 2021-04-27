import React, { useEffect, useState } from 'react'
import MdSend from '@material-ui/icons/Send'
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectchatId, selectchatName } from './features/chatSlice';
import db from './firebase';
import { DesktopAccessDisabledRounded } from '@material-ui/icons';
import firebase from 'firebase/app'
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move'
function Chat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const chatName= useSelector(selectchatName)
  const chatId = useSelector(selectchatId);
  const user = useSelector(selectUser);
  
  useEffect(() => {
    if (chatId) {
      db.collection("chats").doc(chatId).collection("messages").orderBy('timestamp', 'asc')
        .onSnapshot(docsnap => (
          setMessages(
            docsnap.docs.map(doc => ({
              id: doc.id,
              data:doc.data()
          }))
        )
      ))
     }
    return () => {
      
    }
  }, [chatId])
    
  const sendMessage = (e) => {
      e.preventDefault();
      db.collection('chats').doc(chatId).collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        uid: user.uid,
        photo: user.photo,
        email: user.email,
        displayName:user.displayName
      })

         setInput("")
    }
    return (
      <div className=" w-2/3 flex flex-col bg-white h-screen">
        {/* chat Header */}
        <div className="h-14 p-3 flex justify-between  border-b-[1px] border-gray-500 bg-[#f5f5f5]">
          <h4 className="text-gray-500 font-medium">
            {" "}
            To: <span className="text-black"> {chatName} </span>
          </h4>
          <strong>Details</strong>
        </div>
        {/* chat message */}
        <div className="flex-1 w-full overflow-y-scroll scrollbar-hide">
          <FlipMove>
            {messages.map(({ id, data }) => (
              <Message key={id} contents={data} />
            ))}
          </FlipMove>
        </div>
        {/* chat input */}
        <div className="w-full flex items-center px-2 py-2 border-t-[1px] border-gray-500 bg-[#f5f5f5]">
          <form action="" className="flex w-full ">
            <input
              type="text"
              placeholder="message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="outline-none flex items-center px-3  py-2 md:px-5 sm:w-4/5 md:w-11/12"
            />
            <button
              type="submit"
              onClick={sendMessage}
              className="text-xs sm:text-sm md:text-sm md:w-1/12"
            >
              {" "}
              <MdSend />{" "}
            </button>
          </form>
        </div>
      </div>
    );
}

export default Chat
