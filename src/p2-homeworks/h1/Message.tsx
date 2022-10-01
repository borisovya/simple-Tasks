import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>

            <img className={s.avatar} src={props.avatar}/>

            <div className={s.messageStyleGeneral}>

                <div className={s.nameStyle}>{props.name}</div>
                <div className={s.messageBlock}>{props.message}</div>
                <span className={s.messageTime}>{props.time}</span>
            </div>

        </div>
    )
}



export default Message
