import '../App.css';
import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Chat from './Chat'
import Home from './Home'

function App() {

    const [userName, setUseName] = useState('');


    return (
        <Router>

            <Switch>
                <Route exact path="/" children={<Home setUserName = {setUseName} userName = {userName}/>}/>
                <Route path="/chat" children={<Chat user={userName}/>}/>
            </Switch>
        </Router>
    );
}

export default App;
