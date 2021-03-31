import React, {useEffect, useState} from "react";
import {get} from "lodash";


function Messages(props) {

    const currentRoom = get(props, 'currentRoom', 0);
    const [responseMessages, setresponseMessages] = useState([])
    const ROOM_INFO_URL = 'http://localhost:8080/api/rooms/' + props.currentRoom + '/messages';

    useEffect(() => {
        fetch(ROOM_INFO_URL)
            .then(response => response.json())
            .then(json => {
                setresponseMessages(json);
                console.log(json);

            })
            .catch(e => console.log( e))
        return () => {

        };
    }, [props.currentRoom]);

    return (
        <div className="messages_block">
            {responseMessages.map(el => (
                    <div className="left">
                        <div className="message">
                            {el.message}

                        </div>
                        <div className="message_user_name">
                            {el.name}
                        </div>

                    </div>
                )
            )}

        </div>
    )
}

export default Messages;