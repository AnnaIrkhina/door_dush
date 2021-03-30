import '../App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Chat from './Chat'
import Home from './Home'

function App() {


  return (
    <Router>

      <Switch >
        <Route exact path="/" children={<Home />} />
        <Route path="/chat" children={<Chat />} />
       </Switch>
    </Router>
  );
}

export default App;
