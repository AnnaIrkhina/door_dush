import React, {useEffect, useState} from "react";
import {get} from "lodash";

function RoomTop(props) {
    const roomName = get(props, 'roomName' ,"***");
    const userName = get(props, 'userName', "Ivan Gonzales");
    const users = get(props, 'users', []);

    return(
        <div className="room_top">
            <div className="roomName">{roomName}</div>
            <div>
                <span className="currentUser">
                    {userName+' '}
                </span>
                { users.map(user=>(
                    <span className="user"> {user}  </span>))}
            </div>
        </div>
    )
}
export default RoomTop;