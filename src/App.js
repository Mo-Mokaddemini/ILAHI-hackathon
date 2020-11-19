import "./App.css";
import FunctionCard from "./components/Functionality/FunctionCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Devinity from "./components/Functionality/Devinity";
import Message from "./components/Functionality/Message";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={FunctionCard} />

        <Route path="/devinity" component={Devinity} />

        <Route path="/prayer" component={Message} />
      </Switch>
    </div>
  );
}

export default App;
