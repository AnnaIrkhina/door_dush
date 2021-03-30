
import '../style/component.css'
import React from "react";
import { Link } from "react-router-dom";

import { Input, Button } from 'reactstrap';
function Home() {


return(


      <div className="center">
          <Input className = "Input" placeholder="Type your user name..." onChange />
          <Button><Link to="/chat">Join The DoorSash Chat</Link></Button>
        </div>


);
}
export default Home;