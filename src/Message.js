import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const Message=forwardRef(({id, contents : { timestamp, displayName, email, message, photo, uid }}, ref)=> {
    const user = useSelector(selectUser)
    
    return (
        <div ref={ref} className={`flex items-center relative m-2 mt-6 w-72 md:w-3/5 ${user.email===email && "ml-auto"} `}>
            <Avatar className={` ${user.email===email&& "order-1 ml-2"}  `} src={photo} />
            <p className={`bg-[#f5f5f5] font-medium rounded-2xl m-1 ${user.email===email&& "ml-auto" }`}>{ message}</p>
            <small className={`text-gray-400 absolute text-xs -bottom-3 right-2 ${user.email===email&& "left-0"}`}> {new Date(timestamp?.toDate()).toLocaleString()} </small>
        </div>
    )
})

export default Message
