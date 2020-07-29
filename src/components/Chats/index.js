import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
    return (
        <div className="chats">
            <Chat 
            name="Sarah"
            message="Hey How are you"
            timestamps="35 minutos ago"
            profilePic="https:?/laskdoaskdpoakd"
            />
            <Chat 
            name="Renan"
            message="Hey How are you"
            timestamps="35 minutos ago"
            profilePic="https:?/laskdoaskdpoakd"
            />
            <Chat 
            name="Ju"
            message="Hey How are you"
            timestamps="35 minutos ago"
            profilePic="https:?/laskdoaskdpoakd"
            />
            <Chat 
            name="Jade"
            message="Hey How are you"
            timestamps="35 minutos ago"
            profilePic="https:?/laskdoaskdpoakd"
            />
        </div>
    )
}

export default Chats
