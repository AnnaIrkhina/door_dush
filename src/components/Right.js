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
                <h2>{userName}</h2><small>online 12 minutes</small>
            </div>
            <ul>
                {
                    rooms.map(room => (<Room room={room} setCurrentRoom = {props.setCurrentRoom}/>
                    ))}
            </ul>
        </div>
    )
}

export default Right;
