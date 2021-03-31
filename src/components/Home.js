
import '../style/component.css'
import React from "react";
import { Link } from "react-router-dom";

import {Input, Button, FormControl, InputGroup} from "react-bootstrap";
function Home(props) {


return(


      <div className="center">
          <InputGroup className="mb-3">

              <FormControl
                  placeholder="Type your user name..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange = {(e)=> props.setUserName(e.target.value)}
              />
          </InputGroup>
          <Link to="/chat"><Button disabled = {props.user.length === 0}>Join The DoorSash Chat</Button></Link>
        </div>


);
}
export default Home;