import React from "react";
import {get} from "lodash"

function Room(props) {

    const room = get(props, 'room', {});

    return(
        <li key = {room.id}><a href="#" onClick={props.setCurrentRoom(room.id)}>
            {room.name}</a>

        </li>
    )
}
export default Room;
