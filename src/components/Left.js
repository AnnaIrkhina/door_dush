import React, {useEffect, useState} from "react";

function Left(props) {
    const [responseJson, setResponseJson] = useState([])
    const BASE_API_URL = 'http://localhost:8080/api/rooms/' + props.currentRoom
    useEffect(() => {
        fetch(BASE_API_URL)
            .then(response => response.json())
            .then(json => {
                setResponseJson(json);
                if(json.length) props.setCurrentRoom(json[0].id);
                console.log("left!!!!!!!!!!!!!!", json);
            })
            .catch(e=>console.log("errrr!!!!!!!!!!!!!!", e))
        return () => {

        };
    }, [props.currentRoom]);

    return(
        <div>{props.user}</div>
    )
}
export default Left;