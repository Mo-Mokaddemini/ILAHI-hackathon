import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FunctionCard from "./components/Functionality/FunctionCard";
import Homepage from "./components/homepage/Homepage";
import Message from "./components/Message/Message";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/FunctionCard" component = {FunctionCard}/>
        <Route path="/prayer" component={Message} />
      </Switch>
    </div>
  );
}
export default App;