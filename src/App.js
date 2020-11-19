import React from "react";
import "./App.css";
import FunctionCard from "./components/Functionality/FunctionCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Devinity from "./components/Functionality/Devinity";
import Message from "./components/Functionality/Message";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <div>
      <div className="App">
        <Switch>

        <Route path="/">
            
            <Homepage />
          </Route>
          <Route exact path="/" component={FunctionCard} />

          <Route path="/devinity" component={Devinity} />

          <Route path="/prayer" component={Message} />

        
        </Switch>
      </div>
    </div>
  );
}

export default App;
