import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FunctionCard from "./components/Functionality/FunctionCard";
import Homepage from "./components/homepage/Homepage";
import Message from "./components/Message/Message";
import God from './components/card/God';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/FunctionCard" component = {FunctionCard}/>
        <Route path="/prayer" component={Message} />
        <Route path="/amon">
          <God nameGod="Amon"/>
        </Route>
        <Route path="/anubis">
          <God nameGod="Anubis"/>
        </Route>
        <Route path="/apis">
          <God nameGod="Apis"/>
        </Route>
        <Route path="/aton">
          <God nameGod="Aton"/>
        </Route>
        <Route path="/bastet">
          <God nameGod="Bastet"/>
        </Route>
        <Route path="/hathor">
          <God nameGod="Hathor"/>
        </Route>
        <Route path="/horus">
          <God nameGod="Horus"/>
        </Route>
        <Route path="/isis">
          <God nameGod="Isis"/>
        </Route>
        <Route path="/osiris">
          <God nameGod="Osiris"/>
        </Route>
        <Route path="/ptah">
          <God nameGod="Ptah"/>
        </Route>
        <Route path="/ra">
          <God nameGod="Ra"/>
        </Route>
        <Route path="/thot">
          <God nameGod="Thot"/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;