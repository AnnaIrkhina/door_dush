import React, {useState} from "react";
import {get} from "lodash"


function MessageInput(props) {
    const [message, setMessage] = useState("")
    const userName = get(props, 'userName', '');
    const currentRoom = get(props, 'currentRoom', 0);
    const data = {name: userName, message: message}
    const messageNumber = get(props, 'messageNumber', 0);
    const {setMessageNumber} = props;

    const sendMessage = ()=>{

        const SEND_MESSAGE_API_URL = 'http://localhost:8080/api/rooms/'+currentRoom+'/messages';
        fetch(
            SEND_MESSAGE_API_URL, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setMessageNumber(messageNumber + 1)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div  >
            <input  className="" onChange={(e)=>{setMessage(e.target.value)}}/>
            <button className="message_send_btn" disabled = {message.length === 0} onClick={sendMessage}>Send</button>

        </div>
    )
}

export default MessageInput;