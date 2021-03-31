import React, {useState} from "react";
import {get} from "lodash"

import Room from "./Room";

function Right(props) {
    const userName = get(props, 'user', 'Ivan Ganzales');
    const rooms = get(props, 'rooms', []);
    const [timeOnline, setTimeOnline] = useState('just connected')

    var countDownDate = new Date().getTime();


// Update the count down every 1 minute
    const countdownfunction = setInterval(()=> {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = now - countDownDate;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(days > 0) setTimeOnline(days + ' days')
        else if(hours > 0) setTimeOnline(hours + ' hours')
        else if(minutes > 0) setTimeOnline(minutes + ' minutes')
        else setTimeOnline('just connected')

        // If the count down is over, write some text


    }, 60000);

    return (
        <div>
            <div className="right_user">
                {userName}
            </div>
            <small>online {timeOnline}</small>
            <ul>
                {
                    rooms.map(room => (<Room room={room} setCurRoom = {props.setCurRoom}/>
                    ))}
            </ul>
        </div>
    )
}

export default Right;
