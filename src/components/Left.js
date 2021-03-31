import React, {useEffect, useState} from "react";
import {get} from "lodash";
import RoomTop from "./RoomTop";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

function Left(props) {
    const userName = get(props, 'user', 'Ivan Ganzales');
    const [responseJsonRoomInfo, setResponseJsonRoomInfo] = useState([])
    const [messageNumber, setMessageNumber] = useState(0)
    const ROOM_INFO_URL = 'http://localhost:8080/api/rooms/' + props.currentRoom

    useEffect(() => {
        fetch(ROOM_INFO_URL)
            .then(response => response.json())
            .then(json => {
                setResponseJsonRoomInfo(json);

            })
            .catch(e => console.log("errrr!!!!!!!!!!!!!!", e))
        return () => {

        };
    }, [props.currentRoom]);

    return (
        <div>
            <RoomTop
                userName = {userName}
                users = {responseJsonRoomInfo.users}
                roomName = {responseJsonRoomInfo.name}
            />
            <Messages
                userName = {userName}
                currentRoom = {props.currentRoom}
                messageNumber = {messageNumber}
            />
            <MessageInput
                currentRoom = {props.currentRoom}
                userName = {userName}
                setMessageNumber = {setMessageNumber}
                messageNumber = {messageNumber}
            />

        </div>
    )
}

export default Left;