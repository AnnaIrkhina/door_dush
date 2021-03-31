import React from "react";
import {get} from "lodash"

import Room from "./Room";

function Right(props) {
    const userName = get(props, 'user', 'Ivan Ganzales');
    const rooms = get(props, 'rooms', []);

    console.log("right", rooms)
    return (
        <div>
            <div className="right_user">
                {userName}
            </div>
            <small>online 12 minutes</small>
            <ul>
                {
                    rooms.map(room => (<Room room={room} setCurRoom = {props.setCurRoom}/>
                    ))}
            </ul>
        </div>
    )
}

export default Right;
