import React from 'react'
import s from './Message.module.css'

type Message = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: Message) {
    return (
        <div className={s.message}>

            <span><img className={s.avatar} src={props.avatar}/></span>

            <div className={s.messageStyleGeneral}>
                <div className={s.nameStyle}>{props.name}</div>
                <div className={s.messageBlock}>{props.message}</div>
                <span className={s.messageTime}>{props.time}</span>
            </div>

        </div>
    )
}



export default Message
