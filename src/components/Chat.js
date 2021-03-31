import React, {useEffect, useState} from "react";
import Right from "./Right";
import Left from "./Left";
import {get} from "lodash";

function Chat(props) {
    const userName = get(props, 'user', 'Ivan Ganzales');

    const setCurRoom = (roomNum) => {
        console.log('current room changed for', roomNum);
        setCurrentRoom(roomNum);
    }

    const [currentRoom, setCurrentRoom] = useState(0);
    const [responseJson, setResponseJson] = useState([])
    const BASE_API_URL = 'http://localhost:8080/api/rooms'
    useEffect(() => {
        fetch(BASE_API_URL)
            .then(response => response.json())
            .then(json => {
                setResponseJson(json);
                if (json.length) setCurrentRoom(json[0].id);
                console.log(json);
            })
        return () => {

        };
    }, []);


    return (
        <div className="chat">
            <div className="right"><Right user = {userName} rooms = {responseJson} setCurRoom = {setCurRoom}/></div>
            <div className="left"><Left user = {userName} currentRoom={currentRoom}/></div>

        </div>
        // <div id="container">
        //     <aside id="sidebar">Users</aside>
        //     <section id="main">
        //         <div id="container_left">
        
        //             <section id="messages-list">Messages list</section>
        //             <section id="new-message">New message</section>
        //         </div>
        //     </section>
        // </div>

    );
}

export default Chat;