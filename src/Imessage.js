import React from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'

function Imessage() {
    return (
        <div className="w-full flex">
            <Sidebar/>
            <Chat/>

        </div>
    )
}

export default Imessage
