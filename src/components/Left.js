import React, {useEffect, useState} from "react";

function Left(props) {
    const [responseJson, setResponseJson] = useState([])
    const BASE_API_URL = 'http://localhost:8080/api/rooms/' + props.currentRoom
    useEffect(() => {
        fetch(BASE_API_URL)
            .then(response => response.json())
            .then(json => {
                setResponseJson(json);

                console.log("left!!!!!!!!!!!!!!", json);
            })
            .catch(e=>console.log("errrr!!!!!!!!!!!!!!", e))
        return () => {

        };
    }, [props.currentRoom]);

    return(
        <div>
            <div><h2>{responseJson.name}</h2></div>
            <div>
                <span className="currentUser">
                    {props.user+' '}
                </span>
                { responseJson.users.map(user=>(
                    <span className="user"> {user}  </span>))}
            </div>
        </div>
    )
}
export default Left;