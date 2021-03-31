
import '../style/component.css'
import React from "react";
import { Link } from "react-router-dom";

import {Input, Button, FormControl, InputGroup} from "react-bootstrap";
function Home(props) {


return(


      <div className="center">
          <input placeholder="Type your user name..." onChange = {(e)=> props.setUserName(e.target.value.trim())} />
          <Link to="/chat"><Button disabled = {props.userName.length === 0}>Join The DoorSash Chat</Button></Link>
        </div>


);
}
export default Home;