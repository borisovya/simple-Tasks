import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4WVAwlOj6XKpnXevQNEtqxssmeuEdo6jkQ&usqp=CAU',
    name: 'Vladimir',
    message: 'Игнат-монстр!',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
