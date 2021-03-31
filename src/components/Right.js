import React from "react";
import {get} from "lodash"

import Room from "./Room";

function Right(props) {
    const userName = get(props, 'user', 'Ivan Ganzales');
    const rooms = get(props, 'rooms', []);

    console.log("right", rooms)
    return (
        <div>
            <div>
                <h3>{userName}</h3><small>online 12 minutes</small>
            </div>
            <ul>
                {
                    rooms.map(room => (<Room room={room} setCurRoom = {props.setCurRoom}/>
                    ))}
            </ul>
        </div>
    )
}

export default Right;
