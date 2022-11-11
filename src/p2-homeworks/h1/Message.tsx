import React from 'react'
import './Message.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className="Message-container">
            <div className="Message-container-image-and-text">
                <img src={props.avatar}/>
                <div className="Message-container-text">
                    <div className="Message-container-text-name">{props.name}</div>
                    <pre>{props.message}</pre>
                </div>
            </div>
            <div className="Message-container-Friends-time">{props.time}</div>
        </div>
    )
}

export default Message
